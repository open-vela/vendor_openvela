# ##############################################################################
# vendor/openvela/boards/vela/CMakeLists.txt
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

if(CONFIG_ARCH_ARMV8M)
  set(LD_SCRIPT_FILE flashboot_armv8m.ld)
endif()

if(CONFIG_ARCH_X86_64)
  set(LD_SCRIPT_FILE qemu.ld)
endif()

file(GLOB EXTRA_LIBS
     ${NUTTX_BOARD_ABS_DIR}/libs/${CONFIG_ARCH_BOARD_CUSTOM_NAME}/*.a)

nuttx_add_extra_library(${EXTRA_LIBS})

set_property(GLOBAL PROPERTY LD_SCRIPT
                             "${NUTTX_BOARD_ABS_DIR}/scripts/${LD_SCRIPT_FILE}")

set(emulator_config_str
    [=[
avd.ini.encoding = UTF-8
disk.dataPartition.size = 10G
fastboot.forceColdBoot = yes
hw.accelerometer = yes
hw.audioInput = yes
hw.battery = yes
hw.camera.back = webcam0
hw.camera.front = emulated
hw.dPad = no
hw.gps = yes
hw.gpu.enabled = yes
hw.keyboard = yes
hw.lcd.density = 420
hw.lcd.height = 1280
hw.lcd.width = 720
hw.cpu.ncore = 4
hw.mainKeys = no
hw.ramSize = 1024
hw.sensors.orientation = yes
hw.sensors.proximity = yes
image.sysdir.1 = x86/
skin.dynamic = yes
skin.name = xiaomi_smart_screen_10
  ]=])

set(emulator_feature_str
    [=[
EncryptUserData = off
ModemSimulator = on
GLAsyncSwap = on
GLESDynamicVersion = on
VirtioInput = off

]=])

file(WRITE ${CMAKE_BINARY_DIR}/config.ini "${emulator_config_str}")
file(WRITE ${CMAKE_BINARY_DIR}/advancedFeatures.ini "${emulator_feature_str}")

add_custom_target(
  gen_images ALL
  DEPENDS nuttx
  WORKING_DIRECTORY .
  COMMAND genromfs -f ${CMAKE_BINARY_DIR}/vela_system.bin -d ${NUTTX_BOARD_ABS_DIR}/prebuilts/system
  COMMAND dd if=/dev/zero of=${CMAKE_BINARY_DIR}/vela_data.bin bs=1M count=256
  COMMAND mkfs.fat ${CMAKE_BINARY_DIR}/vela_data.bin
  COMMAND mcopy -i ${CMAKE_BINARY_DIR}/vela_data.bin -sv ${NUTTX_BOARD_ABS_DIR}/prebuilts/data/ ::)

if(CONFIG_VELA_AP)
  add_custom_target(
    nuttx_post_build
    WORKING_DIRECTORY ${CMAKE_BINARY_DIR}
    COMMAND cp nuttx vela_ap.elf
    COMMAND cp nuttx vela_ap.bin
    DEPENDS gen_images)
elseif(CONFIG_VELA_TEE)
  add_custom_target(
    nuttx_post_build
    WORKING_DIRECTORY ${CMAKE_BINARY_DIR}
    COMMAND cp nuttx vela_tee.elf
    COMMAND cp nuttx vela_tee.bin
    DEPENDS gen_images)
elseif(CONFIG_VELA_BL)
  add_custom_target(
    nuttx_post_build
    WORKING_DIRECTORY ${CMAKE_BINARY_DIR}
    COMMAND cp nuttx vela_bl.elf
    COMMAND cp nuttx.bin vela_bl.bin
    DEPENDS gen_images)
endif()
