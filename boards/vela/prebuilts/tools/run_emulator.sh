############################################################################
# vendor/openvela/boards/vela/prebuilts/tools/run_emulator.sh
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.  The
# ASF licenses this file to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance with the
# License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
# License for the specific language governing permissions and limitations
# under the License.
#
############################################################################

NUTTX_BIN="${TOP_DIR}/nuttx/nuttx"

if [ ! -e ${NUTTX_BIN} ]; then
  echo "NuttX binary not found. Build with the following command:"
  echo "[arm]"
  echo "./build.sh vendor/openvela/boards/vela/configs/goldfish-armeabi-v7a-ap"
  echo "[aarch64]"
  echo "./build.sh vendor/openvela/boards/vela/configs/goldfish-arm64-v8a-ap"
  exit
fi

AVD_HOME="${HOME}/.vela/vvd"
AVD_NAME="Vela_Generic_Device"
AVD_DISPLAY_NAME=$(echo ${AVD_NAME} | tr '_' ' ')
AVD_PATH="${AVD_HOME}/${AVD_NAME}.vvd"
AVD_PATH_REL="avd/${AVD_NAME}.vvd"
AVD_INI="${AVD_HOME}/${AVD_NAME}.ini"
AVD_CONFIG_INI="${AVD_PATH}/config.ini"

mkdir -p ${AVD_PATH}

cat << EOF > ${AVD_INI}
path=${AVD_PATH}
path.rel=avd/${AVD_PATH_REL}
EOF

if [ -n "$(file -b ${NUTTX_BIN} | grep 'ELF 64-bit LSB executable, ARM aarch64')" ]; then
  AVD_ABI="arm64-v8a"
  AVD_ARCH="arm64"
elif [ -n "$(file -b ${NUTTX_BIN} | grep 'ELF 32-bit LSB executable, ARM')" ]; then
  AVD_ABI="armeabi-v7a"
  AVD_ARCH="arm"
else
  echo "Invalid NuttX binary."
fi

cat << EOF > ${AVD_CONFIG_INI}
AvdId = ${AVD_NAME}
abi.type = ${AVD_ABI}
avd.ini.displayname = ${AVD_DISPLAY_NAME}
avd.ini.encoding = UTF-8
fastboot.forceChosenSnapshotBoot = no
fastboot.forceColdBoot = yes
fastboot.forceFastBoot = no
hw.accelerometer = yes
hw.arc = false
hw.audioInput = yes
hw.battery = yes
hw.camera.back = webcam0
hw.camera.front = emulated
hw.cpu.arch = ${AVD_ARCH}
hw.cpu.ncore = 4
hw.dPad = no
hw.gps = yes
hw.gpu.enabled = yes
hw.gpu.mode = host
hw.initialOrientation = Portrait
hw.keyboard = yes
hw.lcd.density = 420
hw.lcd.height = 1280
hw.lcd.width = 720
hw.mainKeys = no
hw.ramSize = 512
hw.sdCard = no
hw.sensors.orientation = yes
hw.sensors.proximity = yes
hw.trackBall = no
image.sysdir.1 = ${TOP_DIR}/nuttx
runtime.network.latency = none
runtime.network.speed = full
showDeviceFrame = yes
skin.dynamic = yes
skin.name = xiaomi_smart_screen_10
skin.path = ${TOP_DIR}/prebuilts/emulator/skins/xiaomi_smart_screen_10
EOF

cat << EOF > ${HOME}/.android/advancedFeatures.ini
ModemSimulator = on
EOF

QEMU_OPTION="-qemu"

for arg in "$@"
do
  echo "arg=$arg"
  if [ $arg == "-qemu" ];
    then QEMU_OPTION="";
  fi
done

if [ ! -f ${TOP_DIR}/nuttx/vela_system.bin ]; then
  echo "Copy vela_system.img"
  cp ${TOP_DIR}/vendor/openvela/boards/vela/prebuilts/image/system.img ${TOP_DIR}/nuttx/vela_system.bin
fi

if [ ! -f ${AVD_PATH}/vela_data.bin ]; then
  echo "Copy vela_data.img"
  cp ${TOP_DIR}/vendor/openvela/boards/vela/prebuilts/image/data.img ${AVD_PATH}/vela_data.bin
fi

QEMU_OPTION="${QEMU_OPTION} \
-drive index=0,id=system,if=none,format=raw,file=${TOP_DIR}/nuttx/vela_system.bin \
-device virtio-blk-device,bus=virtio-mmio-bus.0,drive=system \
-drive index=1,id=userdata,if=none,format=raw,file=${AVD_PATH}/vela_data.bin \
-device virtio-blk-device,bus=virtio-mmio-bus.1,drive=userdata \
-device virtio-snd,bus=virtio-mmio-bus.2 \
-allow-host-audio -semihosting"

${EMULATOR_BIN} -vela \
  -avd ${AVD_NAME} \
  -show-kernel \
  -verbose \
  -no-system \
  -no-data \
  $@ ${QEMU_OPTION}
