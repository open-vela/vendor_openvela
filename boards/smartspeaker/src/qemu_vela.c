/****************************************************************************
 * vendor/qemu/boards/smartspeaker/src/qemu_vela.c
 *
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.  The
 * ASF licenses this file to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 ****************************************************************************/

/****************************************************************************
 * Included Files
 ****************************************************************************/

#include <stdio.h>
#include <nuttx/config.h>
#include <assert.h>
#include <fcntl.h>
#include <ctype.h>
#include <errno.h>
#include <syslog.h>
#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <string.h>
#include <sys/param.h>
#include <sys/stat.h>
#include <sys/types.h>


#include <triad_ca_api.h>

#include <nuttx/arch.h>
#include <nuttx/board.h>
#include <nuttx/fdt.h>
#include <nuttx/drivers/goldfish_pipe.h>
#include <nuttx/input/goldfish_events.h>
#include <nuttx/timers/pl031.h>
#include <nuttx/timers/arch_rtc.h>
#include <nuttx/timers/rtc.h>
#include <nuttx/power/battery_gauge.h>
#include <nuttx/sensors/goldfish_gnss.h>
#include <nuttx/sensors/goldfish_sensor.h>
#include <nuttx/video/goldfish_camera.h>
#include <nuttx/video/goldfish_fb.h>
#include <nuttx/video/goldfish_gpu_fb.h>
#include <nuttx/video/video.h>
#include <nuttx/virtio/virtio-mmio.h>

#include <sys/boardctl.h>
#include <sys/param.h>

#ifdef CONFIG_VNCSERVER
#include <nuttx/video/vnc.h>
#endif
#ifdef CONFIG_LIBC_FDT
#  include <libfdt.h>
#endif
#include <debug.h>

#ifdef CONFIG_ARCH_ARM
#  include "arm_cpu_psci.h"
#endif
#ifdef CONFIG_ARCH_ARM64
#  include "arm64_cpu_psci.h"
#endif

#ifdef CONFIG_ARCH_TRUSTZONE_SECURE
#include "sctlr.h"
#include "gic.h"
#include "sm.h"
#endif

/****************************************************************************
 * Pre-processor Definitions
 ****************************************************************************/
#define MIIO_DID_LEN          9
#define MIIO_KEY_LEN          16
#define PRODUCT_SN_LEN        15
#define BOARDMISC_DATA_SIZE   32
#define BOARDIOC_USER_KEY     (BOARDIOC_USER + 1)
#define BOARDIOC_USER_SN      (BOARDIOC_USER + 2)

#define QEMU_SPI_IRQ_BASE            32

/*
 * /dev/misc partition data structure:
 *
 *  char sn[128];
 *  char mac_wifi[128];
 *  char mac_bt[128];
 *  char did[128];
 *  char key[128];
 *  char color_id;
 *  char color_description[32];
 */

#define PRODUCT_SN_LEN        15
#define BOARDMISC_DATA_SIZE   32
#define BOARDMISC_BLOCK_SIZE  128
#define BOARDIOC_USER_KEY     (BOARDIOC_USER + 1)
#define BOARDIOC_USER_SN      (BOARDIOC_USER + 2)

/****************************************************************************
 * Private Types
 ****************************************************************************/

enum board_misc_data_e
{
  BOARDIOC_DATA_SN = 0,
  BOARDIOC_DATA_WIFIMAC,
  BOARDIOC_DATA_BTMAC,
  BOARDIOC_DATA_DID,
  BOARDIOC_DATA_KEY,
  BOARDIOC_DATA_NUM,
};

struct board_misc_data_s
{
  const char *env;
  const char *name;
  char data[BOARDMISC_DATA_SIZE];
  const int misc_len;
};

static struct board_misc_data_s g_misc_data[BOARDIOC_DATA_NUM] =
{
  { .name = "sn",         .data = "55118/F3Z800841",   },
  { .name = "mac_wifi",   .data = "42:43:44:45:46:47", },
  { .name = "mac_bt",     .data = "42:43:44:45:46:48", },
  { .name = "miio_did",   .data = "000000001",         },
  { .name = "miio_key",   .data = "0000000000000001",  },
};

/****************************************************************************
 * Private Data
 ****************************************************************************/


/****************************************************************************
 * Private Functions
 ****************************************************************************/

#if defined(CONFIG_LIBC_FDT) && defined(CONFIG_DEVICE_TREE)
#ifdef CONFIG_DRIVERS_VIRTIO_MMIO

/****************************************************************************
 * Name: register_virtio_devices_from_fdt
 ****************************************************************************/

static void register_virtio_devices_from_fdt(const void *fdt)
{
  uintptr_t addr;
  int offset = -1;
  int irqnum;

  for (; ; )
    {
      offset = fdt_node_offset_by_compatible(fdt, offset, "virtio,mmio");
      if (offset == -FDT_ERR_NOTFOUND)
        {
          break;
        }

      addr = fdt_get_reg_base(fdt, offset, 0);
      irqnum = fdt_get_irq(fdt, offset, 1, QEMU_SPI_IRQ_BASE);
      if (addr > 0 && irqnum >= 0)
        {
          virtio_register_mmio_device((void *)addr, irqnum);
        }
    }
}

#endif

/****************************************************************************
 * Name: register_devices_from_fdt
 ****************************************************************************/

static void register_devices_from_fdt(void)
{
  const void *fdt = fdt_get();

  if (fdt == NULL)
    {
      return;
    }

#ifdef CONFIG_DRIVERS_VIRTIO_MMIO
  register_virtio_devices_from_fdt(fdt);
#endif

#ifdef CONFIG_GOLDFISH_PIPE
  goldfish_pipe_register(
    (void *)fdt_get_reg_base_by_path(fdt, "/goldfish_pipe"),
    fdt_get_irq_by_path(fdt, 1, "/goldfish_pipe", QEMU_SPI_IRQ_BASE));
#endif

#ifdef CONFIG_GOLDFISH_BATTERY
  goldfish_battery_register(
    (void *)fdt_get_reg_base_by_path(fdt, "/goldfish_battery"),
    fdt_get_irq_by_path(fdt, 1, "/goldfish_battery", QEMU_SPI_IRQ_BASE));
#endif

#ifdef CONFIG_GOLDFISH_FB
  goldfish_fb_register(0,
    (void *)fdt_get_reg_base_by_path(fdt, "/goldfish_fb"),
    fdt_get_irq_by_path(fdt, 1, "/goldfish_fb", QEMU_SPI_IRQ_BASE));
#endif

#ifdef CONFIG_GOLDFISH_GPU_FB
  goldfish_gpu_fb_register(0);
#endif

#ifdef CONFIG_INPUT_GOLDFISH_EVENTS
  goldfish_events_register((void *)fdt_get_reg_base_by_path(fdt,
                           "/goldfish-events"),
                           fdt_get_irq_by_path(fdt, 1, "/goldfish-events",
                                               QEMU_SPI_IRQ_BASE));
#endif
}

#ifdef CONFIG_RTC_PL031
int up_rtc_initialize(void)
{
  struct rtc_lowerhalf_s *lowerhalf;
  const void *fdt = fdt_get();

  if (fdt == NULL)
    {
      return -EINVAL;
    }

  lowerhalf = pl031_initialize(fdt_get_reg_base_by_path(fdt, "/pl031"),
                               fdt_get_irq_by_path(fdt, 1, "/pl031",
                                                   QEMU_SPI_IRQ_BASE));

  up_rtc_set_lowerhalf(lowerhalf, true);

  return rtc_initialize(0, lowerhalf);
}
#endif

#endif

static int board_misc_init(void)
{
  static bool binit = false;
  char buf[64] = {0};
  int config_fd = -1;
  int ret = -1;
  int index = 0;

  if (binit)
  {
    syslog(LOG_INFO, "%s: already inited\n", __func__);
    return OK;
  }

  if (access("/data/etc", F_OK))
  {
    ret = mkdir("/data/etc", 0644);
    if (ret)
    {
      syslog(LOG_ERR, "%s: can not create dir /data/etc, %d\n", __func__, ret);
      goto config_fd_err;
    }
    else
    {
        syslog(LOG_INFO, "%s: create /data/etc successfully!\n", __func__);
    }
  }
  else
  {
    syslog(LOG_INFO, "%s: /data/etc is exist\n", __func__);
  }

  config_fd = open("/data/etc/device.info", O_WRONLY | O_CREAT | O_TRUNC, 0644);
  if (config_fd < 0)
  {
      syslog(LOG_ERR, "%s: could not open /data/etc/device.info\n",__func__);
      goto config_fd_err;
  }

  int ret_did = -1, ret_key = -1;
  uint8_t did[MIIO_DID_LEN - 1] = {0}, key[MIIO_KEY_LEN] = {0};
  ret_did = triad_load_did(did, 8);
  ret_key = triad_load_key(key, MIIO_KEY_LEN);
  if (!ret_did)
  {
    snprintf(g_misc_data[3].data, sizeof(g_misc_data[3].data), "%" PRIu64, *(uint64_t*)did);

    snprintf(buf, sizeof(buf), "%s = \"%s\"\n", g_misc_data[3].name, g_misc_data[3].data);
    syslog(LOG_INFO, "%s: did name=%s, data=%s\n", __func__, g_misc_data[3].name, g_misc_data[3].data);

    ret = write(config_fd, buf, strlen(buf));
    if (ret < 0)
      syslog(LOG_ERR, "%s: write device info error, errno %d\n", __func__, ret);
  } else {
      syslog(LOG_ERR, "%s: load did failed, errno %d\n", __func__, ret_did);
  }

  if (!ret_key)
  {
    for (index = 0; index < MIIO_KEY_LEN; index++)
    {
      g_misc_data[4].data[index] = (char)key[index];
    }
    snprintf(buf, sizeof(buf), "%s = \"%s\"\n", g_misc_data[4].name, g_misc_data[4].data);
    syslog(LOG_INFO, "%s: key name=%s, data=%s\n", __func__, g_misc_data[4].name, g_misc_data[4].data);

    ret = write(config_fd, buf, strlen(buf));
    if (ret < 0)
      syslog(LOG_ERR, "%s: write device info error, errno %d\n", __func__, ret);
  } else {
      syslog(LOG_ERR, "%s: load key failed, errno %d\n", __func__, ret_key);
  }


  for(index = 0; index < BOARDIOC_DATA_NUM; index++)
  {
    if ((index == BOARDIOC_DATA_DID && !ret_did) || (index == BOARDIOC_DATA_KEY && !ret_key))
      continue;
    snprintf(buf, sizeof(buf), "%s = \"%s\"\n", g_misc_data[index].name, g_misc_data[index].data);
    syslog(LOG_INFO, "%s: name=%s, data=%s\n", __func__, g_misc_data[index].name, g_misc_data[index].data);

    ret = write(config_fd, buf, strlen(buf));
    if (ret < 0)
        syslog(LOG_ERR, "%s: write device info error, errno %d\n", __func__, ret);
 }

  close(config_fd);
config_fd_err:
  return ret < 0 ? ret : OK;
}

/****************************************************************************
 * Public Functions
 ****************************************************************************/

int board_init_rptun(void)
{
#ifdef CONFIG_RPTUN_SECURE
  qemu_rptun_init();
#endif

  return 0;
}

int board_init_mmio(void)
{
#if defined(CONFIG_LIBC_FDT) && defined(CONFIG_DEVICE_TREE)
  register_devices_from_fdt();
#endif

  return 0;
}


int board_ioctl(unsigned int cmd, uintptr_t arg)
{
  int ret;
  ret = board_misc_init();
  if(ret)
    {
      syslog(LOG_ERR, "ERROR: read key failed\n");
      return -EINVAL;
    }

  switch (cmd)
    {
      case BOARDIOC_USER_KEY:
        {
          memcpy((void *)arg, g_misc_data[BOARDIOC_DATA_KEY].data, 16);
        }
      break;

      case BOARDIOC_USER_SN:
        {
          memcpy((void *)arg, g_misc_data[BOARDIOC_DATA_SN].data, PRODUCT_SN_LEN);
        }
      break;

      default:
        return -EINVAL;
    }

  return OK;
}

int board_get_did(uint8_t *uniqueid)
{
  int ret;
  ret = board_misc_init();
  if (ret)
    {
      syslog(LOG_ERR, "ERROR: read did failed\n");
      return -EINVAL;
    }

  *(uint64_t *)uniqueid = strtoull(g_misc_data[BOARDIOC_DATA_DID].data, NULL, 10);
  return OK;
}
