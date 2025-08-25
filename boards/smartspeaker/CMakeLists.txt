# ##############################################################################
# vendor/openvela/boards/smartspeaker/CMakeLists.txt
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
add_subdirectory(src)
if(CONFIG_ARCH_ARM64)
  set(LD_SCRIPT_FILE dramboot_armv8a.ld)
endif()
if(CONFIG_ARCH_ARMV7A)
  set(LD_SCRIPT_FILE link.ld)
endif()
file(GLOB EXTRA_LIBS
     ${NUTTX_BOARD_ABS_DIR}/libs/${CONFIG_ARCH_BOARD_CUSTOM_NAME}/libbluelet.a)
nuttx_add_extra_library(${EXTRA_LIBS})
set_property(GLOBAL PROPERTY LD_SCRIPT
                             "${NUTTX_BOARD_ABS_DIR}/scripts/${LD_SCRIPT_FILE}")
# POSTBUILD

set(DATA_BIN ${CMAKE_BINARY_DIR}/vela_data.bin)

add_custom_target(
  nuttx_post_build
  DEPENDS nuttx
  WORKING_DIRECTORY ${CMAKE_BINARY_DIR}
  COMMENT "Generating: vela_ap.bin"
  COMMAND ${CMAKE_COMMAND} -E copy nuttx vela_ap.elf
  COMMAND ${CMAKE_COMMAND} -E copy nuttx.bin vela_ap.bin
  COMMAND ${CMAKE_COMMAND} -E copy nuttx.map vela_ap.map
  COMMAND genromfs -f ${CMAKE_BINARY_DIR}/vela_system.bin -d
          ${NUTTX_BOARD_ABS_DIR}/prebuilts/data/res
  COMMAND mkdir -p ${NUTTX_BOARD_ABS_DIR}/prebuilts/image;
  COMMAND dd if=/dev/zero of=${DATA_BIN} bs=1M count=120;
  COMMAND mkfs.fat ${DATA_BIN};
  COMMAND mcopy -i ${DATA_BIN} -sv
          ${NUTTX_BOARD_ABS_DIR}/prebuilts/data/UDISK/* :: > /dev/null 2>&1;)
