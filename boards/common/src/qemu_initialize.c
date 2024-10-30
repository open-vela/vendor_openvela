/****************************************************************************
 * vendor/openvela/boards/common/src/vela.c
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
#include <nuttx/lib/modlib.h>
#ifdef CONFIG_SENSORS_GOLDFISH_GNSS
#include <nuttx/sensors/goldfish_gnss.h>
#endif
#ifdef CONFIG_SENSORS_GOLDFISH_SENSOR
#include <nuttx/sensors/goldfish_sensor.h>
#endif
#include <nuttx/pci/pci_ep_test.h>
#include <nuttx/video/goldfish_camera.h>
#include <nuttx/video/vnc.h>
#include <nuttx/input/ff_dummy.h>

#include <debug.h>

#ifdef CONFIG_ARCH_TRUSTZONE_SECURE
#include "gic.h"
#include "sm.h"
#endif

#if defined(CONFIG_SMP) && defined(CONFIG_VELA_BL)
#include "arm.h"
#endif

#include "board.h"
#include "sched/sched.h"

/****************************************************************************
 * Pre-processor Definitions
 ****************************************************************************/

/* This set of all CPUs */

#define SCHED_ALL_CPUS           ((1 << CONFIG_SMP_NCPUS) - 1)

/****************************************************************************
 * Public Functions
 ****************************************************************************/

/****************************************************************************
 * Name: xxxx_board_initialize
 *
 * Description:
 *   All emulator(qemu) architectures must provide the following entry point.
 *   This entry point is called in the initialization phase -- after
 *   xxx_memory_initialize and after all memory has been configured and
 *   mapped but before any devices have been initialized.
 *
 * Input Parameters:
 *   None
 *
 * Returned Value:
 *   None
 *
 ****************************************************************************/

#ifdef CONFIG_ARCH_CHIP_QEMU
void qemu_board_initialize(void)
{
}
#endif

#ifdef CONFIG_ARCH_CHIP_GOLDFISH
void goldfish_board_initialize(void)
{
}
#endif

void board_early_initialize(void)
{
#if defined(CONFIG_VELA_TEE)
  /* Non-secure Physical Timer */

  up_secure_irq(GIC_IRQ_PTM, false);

  /* Secure Qemu pl011 uart */

  up_secure_irq(40, true);
#endif
}

void board_late_initialize(void)
{
  board_init_mmio();

#ifdef CONFIG_GOLDFISH_CAMERA
  goldfish_camera_initialize();
#endif

#ifdef CONFIG_SENSORS_GOLDFISH_GNSS
  goldfish_gnss_init(0, 1);
#endif

#ifdef CONFIG_SENSORS_GOLDFISH_SENSOR
  goldfish_sensor_init(0, 1);
#endif

#ifdef CONFIG_VNCSERVER
  vnc_fb_register(0);
#endif

#ifdef CONFIG_PCI_EPF_TEST
  pci_register_epf_test_device("qemu_epc");
#endif

#ifdef CONFIG_FF_DUMMY
  ff_dummy_initialize(0);
#endif

  board_init_rptun();
}

int board_app_initialize(uintptr_t arg)
{
  board_init_app();
  return 0;
}

#ifdef CONFIG_BOARDCTL_BOOT_IMAGE

#  ifdef CONFIG_VELA_TEE
volatile uint32_t g_ap_entry;
#  endif

#  if defined(CONFIG_SMP) && defined(CONFIG_VELA_BL)
static int smp_call_func(void *arg)
{
  void  *entry = arg; /* tee entry */
  uint32_t *regs = up_current_regs();

  DEBUGASSERT(up_interrupt_context());
  regs[REG_PC] = (uint32_t)entry;

  /* We are about to enter the tee entry, and clear thumb execution state */

  if (!((uint32_t)entry & 1))
    {
      regs[REG_CPSR] &= ~PSR_T_BIT;
    }

  return OK;
}
#  endif

#ifdef CONFIG_ARMV7A_SMP_BUSY_WAIT
volatile uint32_t *g_smp_busy_wait =
(uint32_t *)CONFIG_ARMV7A_SMP_BUSY_WAIT_FLAG_ADDR;
#endif

int board_boot_image(const char *path, uint32_t hdr_size)
{
  int ret;
  struct mod_loadinfo_s loadinfo;

  binfo("board_boot_image %s hdr_size %" PRIu32 "\n", path, hdr_size);

  /* Initialize the ELF library to load the program binary. */

  ret = modlib_initialize(path, &loadinfo);
  if (ret < 0)
    {
      berr("Failed to modlib_initialize: %d\n", ret);
      return ret;
    }

  /* Load the program binary */

  ret = modlib_load(&loadinfo);
  if (ret < 0)
    {
      berr("Failed to modlib_load: %d\n", ret);
      return ret;
    }

  /* Reset busy wait status */

#ifdef CONFIG_ARMV7A_SMP_BUSY_WAIT
  *g_smp_busy_wait = 0;
  SP_DSB();
#endif

#ifdef CONFIG_VELA_TEE
  g_ap_entry = loadinfo.ehdr.e_entry;
#else
#  if defined(CONFIG_SMP) && defined(CONFIG_VELA_BL)
  DEBUGASSERT(this_cpu() == 0);
  nxsched_smp_call(SCHED_ALL_CPUS & (SCHED_ALL_CPUS << 1),
                   (nxsched_smp_call_t)smp_call_func,
                   (void *)loadinfo.ehdr.e_entry, false);
#  endif

  ((start_t)loadinfo.ehdr.e_entry)();
#endif

  /* board_boot_image will not return in this case.
   * It if does, it means that there was a problem.
   */

  return -EINVAL;
}
#endif

#ifdef CONFIG_BOARDCTL_POWEROFF
int board_power_off(int status)
{
  up_systempoweroff();
  return 0;
}
#endif

#ifdef CONFIG_BOARDCTL_RESET
int board_reset(int status)
{
  up_systemreset();
  return 0;
}
#endif
