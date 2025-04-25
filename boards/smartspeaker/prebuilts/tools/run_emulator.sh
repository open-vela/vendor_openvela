############################################################################
# vendor/openvela/boards/smartspeaker/prebuilts/tools/run_emulator.sh
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
  echo "./build.sh vendor/openvela/boards/smartspeaker/configs/speaker_screen/"
  exit
fi

# default variables

AVD_HOME="${HOME}/.vela/vvd"
AVD_NAME="Speaker_Screen_$$"
AVD_DISPLAY_NAME=$(echo ${AVD_NAME} | tr '_' ' ')

INDEX_PROVIDED=false
QEMU_OPTION="-qemu"
ARG_OPTION=""

# parse input arguments

while [ $# -gt 0 ]; do
  arg="$1"
  echo "arg=$arg"

  case "$arg" in
    "-keep")
      if [[ -n $2 ]]; then
        AVD_NAME="$2"
        INDEX_PROVIDED=true
        shift 2
      else
        echo "Error: -keep requires a value."
        exit 1
      fi
      ;;
    "-qemu")
      QEMU_OPTION=""
      ARG_OPTION="${ARG_OPTION} ${arg}"
      shift
      ;;
    *)
      ARG_OPTION="${ARG_OPTION} ${arg}"
      shift
      ;;
  esac
done

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

if [ -n "$(file -bL ${NUTTX_BIN} | grep 'ELF 64-bit LSB executable, ARM aarch64')" ]; then
  AVD_ABI="arm64-v8a"
  AVD_ARCH="arm64"
elif [ -n "$(file -bL ${NUTTX_BIN} | grep 'ELF 32-bit LSB executable, ARM')" ]; then
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
hw.lcd.height = 800
hw.lcd.width = 480
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
skin.name = 800x480
skin.path = _no_skin
EOF

# coredump device

if [ -e ${AVD_PATH}/coredump.core ]; then
  core_format=$(file ${AVD_PATH}/coredump.core)
  if [ -n "$(echo ${core_format} | grep 'core file')" ]; then
    timesamp=$(date +%Y%m%d%H%M%S)
    mv ${AVD_PATH}/coredump.core ${AVD_PATH}/${timesamp}.core
    dd if=/dev/zero of=${AVD_PATH}/coredump.core bs=200M count=1
    echo "A core file already exists. will be backed to ${timesamp}.core"
  fi
else
  echo "Create a core file"
  dd if=/dev/zero of=${AVD_PATH}/coredump.core bs=200M count=1
fi

QEMU_OPTION="${QEMU_OPTION} \
  -drive index=2,id=vendor,if=none,format=raw,file=${AVD_PATH}/coredump.core"

# hostfs relative to AVD

if [ ! -f ${AVD_PATH}/vela_data.bin ]; then
  echo "Copy vela_data.bin"
  cp ${TOP_DIR}/vendor/openvela/boards/smartspeaker/prebuilts/image/vela_data.bin ${AVD_PATH}/
fi

# 9pfs device

if [ ! -v HOST_BIN_PATH ]; then
  HOST_BIN_PATH="${TOP_DIR}/apps/bin"
fi

if [ ! -d ${HOST_BIN_PATH} ]; then
  echo "Create ${HOST_BIN_PATH} for 9pfs bin mount"
  mkdir -p ${HOST_BIN_PATH}
else
  echo "Using ${HOST_BIN_PATH} as 9pfs bin mount"
fi

QEMU_OPTION="${QEMU_OPTION} \
  -fsdev local,security_model=none,id=fshostbin,path=${HOST_BIN_PATH} \
  -device virtio-9p-device,id=fs1,fsdev=fshostbin,mount_tag=bin"

# arch specific

QEMU_OPTION="${QEMU_OPTION} \
  -smp 2 \
  -device virtio-blk-device,bus=virtio-mmio-bus.4,drive=vendor \
  -device virtio-snd,bus=virtio-mmio-bus.2 -allow-host-audio -semihosting \
  -device virtio-gpu-device,xres=480,yres=800,bus=virtio-mmio-bus.5"

BIN_PATH=$(dirname ${NUTTX_BIN})
cd "${BIN_PATH}"

${EMULATOR_BIN} -vela -avd ${AVD_NAME} -show-kernel ${ARG_OPTION} ${QEMU_OPTION}

if [[ "${INDEX_PROVIDED}" == false ]]; then
    rm -rf "${AVD_PATH}" "${AVD_INI}"
fi
