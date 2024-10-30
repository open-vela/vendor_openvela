/****************************************************************************
 * boards/vela/src/qemu_boardctl.c
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

#include <assert.h>
#include <errno.h>
#include <nuttx/config.h>
#include <stdint.h>
#include <string.h>
#include <sys/boardctl.h>

#ifdef CONFIG_BOARDCTL_UNIQUEKEY

/****************************************************************************
 * Private Data
 ****************************************************************************/

static uint8_t pseudo_uniq_key[32] =
{
  0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
  0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10,
  0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18,
  0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20
};

/****************************************************************************
 * Public Functions
 ****************************************************************************/

int board_uniquekey(uint8_t *uniquekey)
{
  DEBUGASSERT(CONFIG_BOARDCTL_UNIQUEKEY_SIZE >= 32);
  if (uniquekey == NULL)
    {
      return -EINVAL;
    }

  /* fill the uniquekey with 32 elements */

  memcpy(uniquekey, pseudo_uniq_key, 32);
  return OK;
}

#endif /* CONFIG_BOARDCTL_UNIQUEKEY */
