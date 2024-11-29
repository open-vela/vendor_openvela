/****************************************************************************
 * vendor/openvela/boards/vela/src/qemu_vela.c
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

#include <nuttx/fdt.h>
#include <nuttx/drivers/goldfish_pipe.h>
#include <nuttx/input/goldfish_events.h>
#include <nuttx/pci/pci_ecam.h>
#include <nuttx/power/battery_gauge.h>
#include <nuttx/timers/arch_rtc.h>
#include <nuttx/timers/pl031.h>
#include <nuttx/timers/rpmsg_rtc.h>
#include <nuttx/timers/rtc.h>
#include <nuttx/video/goldfish_camera.h>
#include <nuttx/video/goldfish_fb.h>
#include <nuttx/video/goldfish_gpu_fb.h>
#include <nuttx/video/video.h>
#include <nuttx/virtio/virtio-mmio.h>
#include <nuttx/rptun/rptun.h>
#include <nuttx/serial/uart_rpmsg.h>

#ifdef CONFIG_RPTUN_SECURE
#include <nuttx/rptun/rptun_secure.h>
#endif

#ifdef CONFIG_ARCH_X86_64
#include "x86_64_internal.h"
#endif

#ifdef CONFIG_VNCSERVER
#include <nuttx/video/vnc.h>
#endif
#ifdef CONFIG_LIBC_FDT
#  include <libfdt.h>
#endif

#include <debug.h>

/****************************************************************************
 * Pre-processor Definitions
 ****************************************************************************/

#define QEMU_SPI_IRQ_BASE            32

/* Interrupt ids:
 * ID0-ID7 for Non-secure interrupts
 * ID8-ID15 for Secure interrupts.
 */

#define QEMU_NOSECURE_INTTERRUPT     0
#define QEMU_SECURE_INTTERRUPT       8

/* OpenAMP shared memory, this address must be not used by vela */

#ifndef CONFIG_ARMV7A_SMP_BUSY_WAIT_FLAG_ADDR
#  define CONFIG_ARMV7A_SMP_BUSY_WAIT_FLAG_ADDR 0x45000000
#endif

#define QEMU_SHMEM_ADDR              (CONFIG_ARMV7A_SMP_BUSY_WAIT_FLAG_ADDR + 0x4)

#define FDT_PCI_TYPE_IO              0x01000000
#define FDT_PCI_TYPE_MEM32           0x02000000
#define FDT_PCI_TYPE_MEM64           0x03000000
#define FDT_PCI_TYPE_MASK            0x03000000
#define FDT_PCI_PREFTCH              0x40000000

/* Goldfish battery */

#define GOLDFISH_BATTERY_IOMEM_BASE   0xff010000
#define GOLDFISH_BATTERY_IOMEM_SIZE   0x00001000
#define GOLDFISH_BATTERY_IRQ          48

/* Goldfish events */

#define GOLDFISH_EVENTS_IOMEM_BASE    0xff011000
#define GOLDFISH_EVENTS_IOMEM_SIZE    0x00001000
#define GOLDFISH_EVENTS_IRQ           49

/* Android pipe */

#define GOLDFISH_PIPE_IOMEM_BASE      0xff001000
#define GOLDFISH_PIPE_IOMEM_SIZE      0x00002000
#define GOLDFISH_PIPE_IRQ             50

/* Goldfish framebuffer */

#define GOLDFISH_FB_IOMEM_BASE        0xff012000
#define GOLDFISH_FB_IOMEM_SIZE        0x00000100
#define GOLDFISH_FB_IRQ               51

/* Goldfish audio */

#define GOLDFISH_AUDIO_IOMEM_BASE     0xff013000
#define GOLDFISH_AUDIO_IOMEM_SIZE     0x00000100
#define GOLDFISH_AUDIO_IRQ            52

/* Goldfish sync */

#define GOLDFISH_SYNC_IOMEM_BASE      0xff014000
#define GOLDFISH_SYNC_IOMEM_SIZE      0x00002000
#define GOLDFISH_SYNC_IRQ             53

/* Goldfish rtc */

#define GOLDFISH_RTC_IOMEM_BASE       0xff016000
#define GOLDFISH_RTC_IOMEM_SIZE       0x00001000
#define GOLDFISH_RTC_IRQ              54

/* Goldfish rotary */

#define GOLDFISH_ROTARY_IOMEM_BASE    0xff017000
#define GOLDFISH_ROTARY_IOMEM_SIZE    0x00001000
#define GOLDFISH_ROTARY_IRQ           55

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
 * Name: register_pci_host_from_fdt
 ****************************************************************************/

#ifdef CONFIG_PCI
static void register_pci_host_from_fdt(const void *fdt)
{
  struct pci_resource_s prefetch;
  struct pci_resource_s cfg;
  struct pci_resource_s mem;
  struct pci_resource_s io;
  const fdt32_t *ranges;
  int offset;

  /* #address-size must be 3
   * defined in the PCI Bus Binding to IEEE Std 1275-1994 :
   * Bit#
   *
   * phys.hi cell:  npt000ss bbbbbbbb dddddfff rrrrrrrr
   * phys.mid cell: hhhhhhhh hhhhhhhh hhhhhhhh hhhhhhhh
   * phys.lo cell:  llllllll llllllll llllllll llllllll
   */

  const int na = 3;

  /* #size-cells must be 2 */

  const int ns = 2;
  int rlen;
  int pna;

  memset(&prefetch, 0, sizeof(prefetch));
  memset(&cfg, 0, sizeof(cfg));
  memset(&mem, 0, sizeof(mem));
  memset(&io, 0, sizeof(io));

  offset = fdt_node_offset_by_compatible(fdt, -1,
                                         "pci-host-ecam-generic");
  if (offset < 0)
    {
      return;
    }

  /* Get the reg address, 64 or 32 */

  cfg.start = fdt_get_reg_base(fdt, offset, 0);
  cfg.end = cfg.start + fdt_get_reg_size(fdt, offset);

  /* Get the ranges address */

  ranges = fdt_getprop(fdt, offset, "ranges", &rlen);
  if (ranges < 0)
    {
      return;
    }

  pna = fdt_get_parent_address_cells(fdt, offset);

  for (rlen /= 4; (rlen -= na + pna + ns) >= 0; ranges += na + pna + ns)
    {
      uint32_t type = fdt32_ld(ranges);

      if ((type & FDT_PCI_TYPE_MASK) == FDT_PCI_TYPE_IO &&
          io.end == 0)
        {
          io.start = fdt_ld_by_cells(ranges + na, pna);
          io.end = io.start + fdt_ld_by_cells(ranges + na + pna, ns);
        }
      else if ((type & FDT_PCI_PREFTCH) == FDT_PCI_PREFTCH &&
               prefetch.end == 0)
        {
          prefetch.start = fdt_ld_by_cells(ranges + na, pna);
          prefetch.end = prefetch.start +
                         fdt_ld_by_cells(ranges + na + pna, ns);
        }
      else if (mem.end == 0)
        {
          mem.start = fdt_ld_by_cells(ranges + na, pna);
          mem.end = mem.start + fdt_ld_by_cells(ranges + na + pna, ns);
        }
    }

  pci_ecam_register(&cfg, &io, &mem, &prefetch);
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

#ifdef CONFIG_PCI
  register_pci_host_from_fdt(fdt);
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
  bool sync = true;

  if (fdt == NULL)
    {
      return -EINVAL;
    }

  lowerhalf = pl031_initialize(fdt_get_reg_base_by_path(fdt, "/pl031"),
                               fdt_get_irq_by_path(fdt, 1, "/pl031",
                                                   QEMU_SPI_IRQ_BASE));

#ifdef CONFIG_RTC_RPMSG_SERVER
  lowerhalf = rpmsg_rtc_server_initialize(lowerhalf);
#elif defined(CONFIG_RTC_RPMSG)
  lowerhalf = rpmsg_rtc_initialize();
  sync = false;
#endif

  up_rtc_set_lowerhalf(lowerhalf, sync);

  return rtc_initialize(0, lowerhalf);
}
#endif

#else
/****************************************************************************
 * Name: register_devices
 ****************************************************************************/

static void register_devices(void)
{
#ifdef CONFIG_ARCH_X86_64
#ifdef CONFIG_GOLDFISH_PIPE
  up_map_region((void *)GOLDFISH_PIPE_IOMEM_BASE, GOLDFISH_PIPE_IOMEM_SIZE,
                X86_PAGE_PRESENT | X86_PAGE_WR | X86_PAGE_NOCACHE);
  goldfish_pipe_register((void *)GOLDFISH_PIPE_IOMEM_BASE, GOLDFISH_PIPE_IRQ);
#endif

#ifdef CONFIG_GOLDFISH_BATTERY
  up_map_region((void *)GOLDFISH_BATTERY_IOMEM_BASE, GOLDFISH_BATTERY_IOMEM_SIZE,
                X86_PAGE_PRESENT | X86_PAGE_WR | X86_PAGE_NOCACHE);
  goldfish_battery_register((void *)GOLDFISH_BATTERY_IOMEM_BASE,
                            GOLDFISH_BATTERY_IRQ);
#endif

#ifdef CONFIG_GOLDFISH_FB
  up_map_region((void *)GOLDFISH_FB_IOMEM_BASE, GOLDFISH_FB_IOMEM_SIZE,
                X86_PAGE_PRESENT | X86_PAGE_WR | X86_PAGE_NOCACHE);
  goldfish_fb_register(0, (void *)GOLDFISH_FB_IOMEM_BASE, GOLDFISH_FB_IRQ);
#endif

#ifdef CONFIG_GOLDFISH_GPU_FB
  goldfish_gpu_fb_register(0);
#endif

#ifdef CONFIG_INPUT_GOLDFISH_EVENTS
  up_map_region((void *)GOLDFISH_EVENTS_IOMEM_BASE, GOLDFISH_EVENTS_IOMEM_SIZE,
               X86_PAGE_PRESENT | X86_PAGE_WR | X86_PAGE_NOCACHE);
  goldfish_events_register((void *)GOLDFISH_EVENTS_IOMEM_BASE, GOLDFISH_EVENTS_IRQ);
#endif
#endif
}
#endif

/****************************************************************************
 * Name: rptun_setup_shmem
 *
 * Description:
 *   Initialize shared memory buffer
 *
 * Input Parameters:
 *   base - Start shared memory address for OpenAMP
 *
 * Returned Value:
 *   None
 *
 ****************************************************************************/

#if defined(CONFIG_VELA_TEE)
static void rptun_setup_shmem(struct rptun_rsc_s *rsc)
{
  memset(rsc, 0, sizeof(struct rptun_rsc_s));
  rsc->rsc_tbl_hdr.ver          = 1;
  rsc->rsc_tbl_hdr.num          = 1;
  rsc->offset[0]                = offsetof(struct rptun_rsc_s,
                                           rpmsg_vdev);
  rsc->rpmsg_vdev.type          = RSC_VDEV;
  rsc->rpmsg_vdev.id            = VIRTIO_ID_RPMSG;
  rsc->rpmsg_vdev.dfeatures     = 1 << VIRTIO_RPMSG_F_NS
                                | 1 << VIRTIO_RPMSG_F_ACK
                                | 1 << VIRTIO_RPMSG_F_BUFSZ
                                | VIRTIO_RING_F_MUST_NOTIFY;
  rsc->rpmsg_vdev.num_of_vrings = 2;
  rsc->rpmsg_vdev.notifyid      = RSC_NOTIFY_ID_ANY;
  rsc->rpmsg_vdev.config_len    = sizeof(struct fw_rsc_config);
  rsc->rpmsg_vring0.align       = 8;
  rsc->rpmsg_vring0.num         = 8;
  rsc->rpmsg_vring0.notifyid    = RSC_NOTIFY_ID_ANY;
  rsc->rpmsg_vring1.align       = 8;
  rsc->rpmsg_vring1.num         = 8;
  rsc->rpmsg_vring1.notifyid    = RSC_NOTIFY_ID_ANY;
  rsc->config.r2h_buf_size      = 0x200;
  rsc->config.h2r_buf_size      = 0x200;
}
#endif

/****************************************************************************
 * Name: qemu_rptun_init
 *
 * Description:
 *   Initialize TEE or AP rptun
 *
 * Input Parameters:
 *   None
 *
 * Returned Value:
 *   Return 0 on success. Otherwise, return a negated errno.
 *
 ****************************************************************************/

#ifdef CONFIG_RPTUN_SECURE
static int qemu_rptun_init(void)
{
  struct rptun_rsc_s *rsc = (struct rptun_rsc_s *)QEMU_SHMEM_ADDR;
  int ret = 0;

#if defined(CONFIG_VELA_TEE)
  rptun_setup_shmem(rsc);
  ret = rptun_secure_init("ap", false, rsc,
                          QEMU_SECURE_INTTERRUPT, QEMU_NOSECURE_INTTERRUPT);
#elif defined(CONFIG_VELA_AP)
  ret = rptun_secure_init("tee", true, rsc,
                          QEMU_NOSECURE_INTTERRUPT, QEMU_SECURE_INTTERRUPT);
#endif

  if (ret < 0)
    {
      berr("Failed to init rptun : %d\n", ret);
    }

  return ret;
}
#endif

#ifdef CONFIG_RPMSG_UART
void rpmsg_serialinit(void)
{
#if defined(CONFIG_VELA_AP)
  uart_rpmsg_init("tee", "TEE", 4096, false);
  uart_rpmsg_init("droid", "DROID", 4096, false);
#endif
#if defined(CONFIG_VELA_TEE)
  uart_rpmsg_init("ap", "TEE", 4096, true);
#endif
#if defined(CONFIG_VELA_DROID)
  uart_rpmsg_init("ap", "DROID", 4096, false);
#endif
}
#endif

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
#else
  register_devices();
#endif

  return 0;
}
