# ##############################################################################
# vendor/openvela/boards/vela/src/CMakeLists.txt
#
# Licensed to the Apache Software Foundation (ASF) under one or more contributor
# license agreements.  See the NOTICE file distributed with this work for
# additional information regarding copyright ownership.  The ASF licenses this
# file to you under the Apache License, Version 2.0 (the "License"); you may not
# use this file except in compliance with the License.  You may obtain a copy of
# the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
# License for the specific language governing permissions and limitations under
# the License.
#
# ##############################################################################

if(CONFIG_ARCH_X86_64)
  set(SRCS qemu_vela.c qemu_boot.c qemu_appinit.c)
else()
  set(SRCS qemu_vela.c qemu_boardctl.c qemu_lowputc.c)
endif()

target_sources(board PRIVATE ${SRCS})

if(CONFIG_LIBC_FDT)
  target_include_directories(board
                             PRIVATE ${NUTTX_DIR}/libs/libc/fdt/dtc/libfdt)
endif()

set(VELARCSRCS etc/init.d/rcS etc/init.d/rc.sysinit)

if(${CONFIG_KVDB})
  list(APPEND VELARCSRCS etc/build.prop)
endif()

if(${CONFIG_MEDIA_SERVER})
  list(APPEND VELARCSRCS etc/media/graph.conf)
  list(APPEND VELARCRAWS etc/media/criteria.txt)
  list(APPEND VELARCRAWS etc/media/settings.pfw)
  if(${CONFIG_VELA_HOST})
    list(APPEND VELARCSRCS etc/media/graph_vela.conf)
  elseif(${CONFIG_VELA_REMOTE})
    list(APPEND VELARCSRCS etc/media/graph_remote.conf)
  endif()
endif()

if(${CONFIG_DBUS_DAEMON})
  list(APPEND VELARCRAWS etc/dbus-1/system.conf)
  list(APPEND VELARCRAWS etc/dbus-1/system.d/)
endif()

if(${CONFIG_OFONO_RILMODEM})
  list(APPEND VELARCRAWS
       etc/mobile-broadband-provider-info/serviceproviders.xml)
endif()

if(${CONFIG_MEDIA_FOCUS})
  list(APPEND VELARCRAWS etc/media/media_focus.conf)
endif()

if(CONFIG_ETC_ROMFS)
  nuttx_add_romfs(
    NAME
    etc
    MOUNTPOINT
    etc
    RCSRCS
    ${VELARCSRCS}
    RCRAWS
    ${VELARCRAWS}
    PATH
    ${CMAKE_CURRENT_BINARY_DIR}/etc)

  target_link_libraries(board PRIVATE romfs_etc)
endif()
