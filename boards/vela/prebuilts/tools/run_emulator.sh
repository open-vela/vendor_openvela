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
  echo "[x86_64]"
  echo "./build.sh vendor/openvela/boards/vela/configs/goldfish-x86_64-ap"
  exit
fi

AVD_HOME="${HOME}/.vela/vvd"
AVD_NAME="Vela_Generic_Device"
AVD_DISPLAY_NAME=$(echo ${AVD_NAME} | tr '_' ' ')

if [[ -n ${CUSTOM_AVD_SPACE} ]];then
  AVD_PATH="${CUSTOM_AVD_SPACE}/${AVD_NAME}.vvd"
else
  AVD_PATH="${AVD_HOME}/${AVD_NAME}.vvd"
fi

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
elif [ -n "$(file -b ${NUTTX_BIN} | grep 'ELF 64-bit LSB executable, x86-64')" ]; then
  AVD_ABI="x86_64"
  AVD_ARCH="x86_64"
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
skin.path = ${TARGETDIR}/prebuilts/tools/xiaomi_smart_screen_10
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
-netdev user,id=network,net=10.0.2.0/24,dhcpstart=10.0.2.16 \
-device virtio-net-device,netdev=network,bus=virtio-mmio-bus.4 \
-device virtio-snd,bus=virtio-mmio-bus.2 -allow-host-audio -semihosting"

cp -a ${TOP_DIR}/vendor/openvela/boards/vela/prebuilts/tools/modem_simulator ${AVD_PATH}/

${EMULATOR_BIN} -vela -avd ${AVD_NAME} -show-kernel $@ ${QEMU_OPTION}
