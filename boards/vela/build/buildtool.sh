#!/bin/bash

path=vendor/openvela/boards/vela/prebuilts
mkdir -p $1/$path
cp -p emulator.sh $1
cp -rp $path/* $1/$path

TOP=$(cd $(dirname $0) && cd ../../../../../ && pwd)
qemu_armeabi_v7a_ap_dir=$(cd $1/../qemu-armeabi-v7a-ap && pwd)
if [[ -d ${qemu_armeabi_v7a_ap_dir} ]]; then
    mkdir -p ${qemu_armeabi_v7a_ap_dir}/wamr/tests/
    cp -r ${TOP}/apps/interpreters/wamr/wamr/tests/wamr-test-suites ${qemu_armeabi_v7a_ap_dir}/wamr/tests/
    mkdir -p ${qemu_armeabi_v7a_ap_dir}/wamr/wamr-compiler/build
    cp ${TOP}/prebuilts/clang/linux/wasm/wamrc ${qemu_armeabi_v7a_ap_dir}/wamr/wamr-compiler/build
fi