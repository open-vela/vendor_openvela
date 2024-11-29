/****************************************************************************
 * vendor/openvela/boards/vela/src/qemu_appinit.c
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

#include <nuttx/config.h>

#include <debug.h>

#include <nuttx/board.h>
#include <nuttx/fs/fs.h>

#ifdef CONFIG_ONESHOT
#  include <nuttx/timers/oneshot.h>
#endif

#ifdef CONFIG_PCI
#  include <nuttx/pci/pci.h>
#endif

/****************************************************************************
 * Pre-processor Definitions
 ****************************************************************************/

#ifdef CONFIG_ARCH_INTEL64_HPET_ALARM
#  if CONFIG_ARCH_INTEL64_HPET_ALARM_CHAN != 0
#    error this logic requires that HPET_ALARM_CHAN is set to 0
#  endif
#  define ONESHOOT_TIMER 1
#else
#  define ONESHOOT_TIMER 0
#endif

/****************************************************************************
 * Public Functions
 ****************************************************************************/

/****************************************************************************
 * Name: board_init_app
 ****************************************************************************/

int board_init_app(void)
{
  int ret = OK;
#ifdef CONFIG_ONESHOT
  struct oneshot_lowerhalf_s *os = NULL;
#endif

#ifdef CONFIG_FS_PROCFS
  /* Mount the procfs file system */

  ret = nx_mount(NULL, "/proc", "procfs", 0, NULL);
  if (ret < 0)
    {
      serr("ERROR: Failed to mount procfs at %s: %d\n", "/proc", ret);
    }
#endif

#ifdef CONFIG_ONESHOT
  os = oneshot_initialize(ONESHOOT_TIMER, 10);
  if (os)
    {
      oneshot_register("/dev/oneshot", os);
    }
#endif

  return ret;
}
