/****************************************************************************
 * vendor/openvela/boards/vela/src/vela.c
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

#include <nuttx/arch.h>
#include <nuttx/board.h>
#include <nuttx/drivers/goldfish_pipe.h>
#include <nuttx/sensors/goldfish_gps.h>
#include <nuttx/sensors/goldfish_sensor.h>
#include <nuttx/power/battery_gauge.h>
#include <nuttx/virtio/virtio-mmio.h>
#include <nuttx/binfmt/elf.h>
#include <nuttx/timers/arch_rtc.h>
#include <nuttx/timers/pl031.h>
#include <nuttx/timers/rtc.h>
#include <nuttx/video/goldfish_fb.h>
#include <nuttx/video/goldfish_gpu_fb.h>
#include <nuttx/video/video.h>
#include <nuttx/video/goldfish_camera.h>
#include <nuttx/input/goldfish_events.h>
#include <nuttx/fdt.h>
#include <debug.h>
#ifdef CONFIG_LIBC_FDT
#  include <libfdt.h>
#endif
#ifdef CONFIG_ARCH_ARM
#  include "arm_cpu_psci.h"
#endif
#ifdef CONFIG_ARCH_ARM64
#  include "arm64_cpu_psci.h"
#endif

#ifdef CONFIG_ARCH_TRUSTZONE_SECURE
#include "sctlr.h"
#include "gic.h"
#endif

/****************************************************************************
 * Pre-processor Definitions
 ****************************************************************************/

#define QEMU_SPI_IRQ_BASE            32

/****************************************************************************
 * Private Functions
 ****************************************************************************/

#if defined(CONFIG_LIBC_FDT) && defined(CONFIG_DEVICE_TREE)

/****************************************************************************
 * Name: fdt_get_irq
 *
 * Description:
 *   Only can be use when the corresponding node's parent interrupt
 *   controller is intc node.
 *
 ****************************************************************************/

static int unused_code
fdt_get_irq(const void *fdt, int offset)
{
  const fdt32_t *pv;
  int irq = -ENOENT;

  pv = fdt_getprop(fdt, offset, "interrupts", NULL);
  if (pv != NULL)
    {
      irq = fdt32_ld(pv + 1) + QEMU_SPI_IRQ_BASE;
    }

  return irq;
}

/****************************************************************************
 * Name: fdt_get_irq_by_path
 *
 * Description:
 *   Only can be use when the corresponding node's parent interrupt
 *   controller is intc node.
 *
 ****************************************************************************/

static int unused_code
fdt_get_irq_by_path(const void *fdt, const char *path)
{
  return fdt_get_irq(fdt, fdt_path_offset(fdt, path));
}

/****************************************************************************
 * Name: fdt_get_reg_base
 ****************************************************************************/

static uintptr_t unused_code
fdt_get_reg_base(const void *fdt, int offset)
{
  const void *reg;
  uintptr_t addr = 0;
  int parentoff;

  parentoff = fdt_parent_offset(fdt, offset);
  if (parentoff < 0)
    {
      return addr;
    }

  reg = fdt_getprop(fdt, offset, "reg", NULL);
  if (reg != NULL)
    {
      if (fdt_address_cells(fdt, parentoff) == 2)
        {
          addr = fdt64_ld(reg);
        }
      else
        {
          addr = fdt32_ld(reg);
        }
    }

  return addr;
}

/****************************************************************************
 * Name: fdt_get_reg_base_by_path
 ****************************************************************************/

static uintptr_t unused_code
fdt_get_reg_base_by_path(const void *fdt, const char *path)
{
  return fdt_get_reg_base(fdt, fdt_path_offset(fdt, path));
}

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

      addr = fdt_get_reg_base(fdt, offset);
      irqnum = fdt_get_irq(fdt, offset);
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
    fdt_get_irq_by_path(fdt, "/goldfish_pipe"));
#endif

#ifdef CONFIG_GOLDFISH_BATTERY
  goldfish_battery_register(
    (void *)fdt_get_reg_base_by_path(fdt, "/goldfish_battery"),
    fdt_get_irq_by_path(fdt, "/goldfish_battery"));
#endif

#ifdef CONFIG_GOLDFISH_FB
  goldfish_fb_register(0,
    (void *)fdt_get_reg_base_by_path(fdt, "/goldfish_fb"),
    fdt_get_irq_by_path(fdt, "/goldfish_fb"));
#endif

#ifdef CONFIG_GOLDFISH_GPU_FB
  goldfish_gpu_fb_register(0);
#endif

#ifdef CONFIG_INPUT_GOLDFISH_EVENTS
  goldfish_events_register((void *)fdt_get_reg_base_by_path(fdt,
                           "/goldfish-events"),
                           fdt_get_irq_by_path(fdt, "/goldfish-events"));
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
                               fdt_get_irq_by_path(fdt, "/pl031"));

  up_rtc_set_lowerhalf(lowerhalf, true);

  return rtc_initialize(0, lowerhalf);
}
#endif

#endif

/****************************************************************************
 * Public Functions
 ****************************************************************************/

#ifdef CONFIG_BOARDCTL_BOOT_IMAGE
int board_boot_image(const char *path, uint32_t hdr_size)
{
  int ret;
  struct elf_loadinfo_s loadinfo;

  binfo("board_boot_image %s hdr_size %" PRIu32 "\n", path, hdr_size);

  /* Initialize the ELF library to load the program binary. */

  ret = elf_init(path, &loadinfo);
  if (ret < 0)
    {
      berr("Failed to elf_init: %d\n", ret);
      return ret;
    }

  /* Load the program binary */

  ret = elf_load(&loadinfo);
  if (ret < 0)
    {
      berr("Failed to elf_load: %d\n", ret);
      return ret;
    }

#ifdef CONFIG_VELA_TEE
  CP15_SET(SCR, CP15_GET(SCR) | SCR_NS);
#endif

  ((start_t)loadinfo.ehdr.e_entry)();

  /* board_boot_image will not return in this case.
   * It if does, it means that there was a problem.
   */

  return -EINVAL;
}
#endif

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
