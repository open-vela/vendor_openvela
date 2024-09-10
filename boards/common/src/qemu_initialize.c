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
#include <nuttx/sensors/goldfish_gps.h>
#include <nuttx/sensors/goldfish_sensor.h>
#include <nuttx/video/goldfish_camera.h>

#ifdef CONFIG_ARCH_ARM
#  include "arm_cpu_psci.h"
#endif
#ifdef CONFIG_ARCH_ARM64
#  include "arm64_cpu_psci.h"
#endif

#ifdef CONFIG_ARCH_TRUSTZONE_SECURE
#include "gic.h"
#include "sm.h"
#endif

#include "board.h"

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

#ifdef CONFIG_SENSORS_GOLDFISH_GPS
  goldfish_gps_init(0, 1);
#endif

#ifdef CONFIG_SENSORS_GOLDFISH_SENSOR
  goldfish_sensor_init(0, 1);
#endif

  board_init_rptun();
}

int board_app_initialize(uintptr_t arg)
{
  board_init_app();
  return 0;
}

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
#else
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
  psci_sys_poweroff();
  return 0;
}
#endif

#ifdef CONFIG_BOARDCTL_RESET
int board_reset(int status)
{
  psci_sys_reset();
  return 0;
}
#endif
