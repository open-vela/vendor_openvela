# ##############################################################################
# vendor/openvela/boards/smartspeaker/src/CMakeLists.txt
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
set(SRCS qemu_vela.c qemu_boardctl.c)
target_sources(board PRIVATE ${SRCS})
if(CONFIG_KVDB)
  add_board_rcsrcs(${CMAKE_CURRENT_SOURCE_DIR}/etc/build.prop)
endif()
if(CONFIG_LIBC_FDT)
  target_include_directories(board
                             PRIVATE ${NUTTX_DIR}/libs/libc/fdt/dtc/libfdt)
endif()

target_include_directories(board
                           PRIVATE ${NUTTX_DIR}/../frameworks/security/include)

add_board_rcsrcs(${CMAKE_CURRENT_SOURCE_DIR}/etc/init.d/rcS
                 ${CMAKE_CURRENT_SOURCE_DIR}/etc/init.d/rc.sysinit)
if(CONFIG_MEDIA_SERVER)
  add_board_rcsrcs(${CMAKE_CURRENT_SOURCE_DIR}/etc/media/graph.conf)
  add_board_rcraws(${CMAKE_CURRENT_SOURCE_DIR}/etc/media/criteria.txt)
  add_board_rcraws(${CMAKE_CURRENT_SOURCE_DIR}/etc/media/settings.pfw)
endif()

if(CONFIG_MEDIA_SERVER)
  add_board_rcraws(${CMAKE_CURRENT_SOURCE_DIR}/etc/package.cfg)
endif()

if(CONFIG_SYSTEM_ACTIVITY_SERVICE)
  add_board_rcraws(${CMAKE_CURRENT_SOURCE_DIR}/etc/lmk.cfg)
endif()

add_board_rcraws(${CMAKE_CURRENT_SOURCE_DIR}/etc/uikit_video_config.json)
add_board_rcraws(${CMAKE_CURRENT_SOURCE_DIR}/etc/usr/share/mico)
add_board_rcraws(${CMAKE_CURRENT_SOURCE_DIR}/etc/usr/share/sound/common)
add_board_rcraws(${CMAKE_CURRENT_SOURCE_DIR}/etc/usr/share/sound/vendor)
