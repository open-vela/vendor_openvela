############################################################################
# vendor/openvela/boards/vela/src/Makefile
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

include $(BOARD_COMMON_DIR)/Make.defs

ifeq ($(CONFIG_ARCH_X86_64),y)
CSRCS = qemu_vela.c qemu_boot.c qemu_appinit.c
else
CSRCS = qemu_vela.c qemu_boardctl.c qemu_lowputc.c
endif

ifeq ($(CONFIG_KVDB),y)
RCSRCS += etc/build.prop
endif

ifeq ($(CONFIG_LIBC_FDT),y)
CFLAGS += ${INCDIR_PREFIX}$(TOPDIR)$(DELIM)libs$(DELIM)libc$(DELIM)fdt$(DELIM)dtc$(DELIM)libfdt
endif

ifeq ($(CONFIG_MEDIA_SERVER),y)
  RCSRCS += etc/media/graph.conf
  RCRAWS += etc/media/criteria.txt
  RCRAWS += etc/media/settings.pfw
endif

ifeq ($(CONFIG_LIB_DBUS),y)
  RCRAWS += etc/dbus-1/system.conf
  RCRAWS += etc/dbus-1/system.d/
endif

ifeq ($(CONFIG_OFONO_RILMODEM),y)
  RCRAWS += etc/mobile-broadband-provider-info/serviceproviders.xml
endif

ifeq ($(CONFIG_MEDIA_FOCUS),y)
  RCRAWS += etc/media/media_focus.conf
endif

ifeq ($(CONFIG_UTILS_CURL),y)
  RCRAWS += etc/ssl/curl
endif

ifeq ($(CONFIG_UIKIT_VIDEO_ADAPTER),y)
  RCRAWS += etc/uikit_video_config.json
endif

ifeq ($(CONFIG_MIPLAY),y)
  RCRAWS += etc/miplay
  RCRAWS += etc/miplay/mico_config
endif

ifeq ($(CONFIG_SYSTEM_SERVER),y)
  RCRAWS += etc/package.cfg
endif

.PHONY: FORCE

FORCE:

ARCH_BOARD_CUSTOM_DIR := $(subst ",,${CONFIG_ARCH_BOARD_CUSTOM_DIR})

ifeq ($(CONFIG_TA_ALIPAY),y)
ifneq ($(CONFIG_INTERPRETERS_WAMR),)
ifneq ($(wildcard $(APPDIR)/bin/wasm/ta_alipay.xip),)
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/F1490647578C565BA2C321FD51DC6791: FORCE
	cp $(APPDIR)/bin/wasm/ta_alipay.xip $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/F1490647578C565BA2C321FD51DC6791
else
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/F1490647578C565BA2C321FD51DC6791: FORCE
	mkdir -p $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta
	touch $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/F1490647578C565BA2C321FD51DC6791
endif
  RCRAWS += etc/ta/F1490647578C565BA2C321FD51DC6791
endif
endif

ifeq ($(CONFIG_TA_COMSST),y)
ifneq ($(CONFIG_INTERPRETERS_WAMR),)
ifneq ($(wildcard $(APPDIR)/bin/wasm/ta_comsst.xip),)
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/F617ACC99AE5405985D05056DF6BF28B: FORCE
	cp $(APPDIR)/bin/wasm/ta_comsst.xip $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/F617ACC99AE5405985D05056DF6BF28B
else
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/F617ACC99AE5405985D05056DF6BF28B: FORCE
	mkdir -p $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta
	touch $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/F617ACC99AE5405985D05056DF6BF28B
endif
  RCRAWS += etc/ta/F617ACC99AE5405985D05056DF6BF28B
endif
endif

ifeq ($(CONFIG_TA_HELLO_WORLD),y)
ifneq ($(CONFIG_INTERPRETERS_WAMR),)
ifneq ($(wildcard $(APPDIR)/bin/wasm/ta_hello_world.xip),)
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/00F2AA8A5024E411ABE20002A5D5C51B: FORCE
	cp $(APPDIR)/bin/wasm/ta_hello_world.xip $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/00F2AA8A5024E411ABE20002A5D5C51B
else
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/00F2AA8A5024E411ABE20002A5D5C51B: FORCE
	mkdir -p $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta
	touch $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/00F2AA8A5024E411ABE20002A5D5C51B
endif
  RCRAWS += etc/ta/00F2AA8A5024E411ABE20002A5D5C51B
endif
endif

ifeq ($(CONFIG_TA_TRIAD),y)
ifneq ($(CONFIG_INTERPRETERS_WAMR),)
ifneq ($(wildcard $(APPDIR)/bin/wasm/ta_triad.xip),)
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/1C6455C967DD255194BE7F9DCD557595: FORCE
	cp $(APPDIR)/bin/wasm/ta_triad.xip $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/1C6455C967DD255194BE7F9DCD557595
else
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/1C6455C967DD255194BE7F9DCD557595: FORCE
	mkdir -p $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta
	touch $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/1C6455C967DD255194BE7F9DCD557595
endif
  RCRAWS += etc/ta/1C6455C967DD255194BE7F9DCD557595
endif
endif

ifeq ($(CONFIG_TA_WXCODEPAY),y)
ifneq ($(CONFIG_INTERPRETERS_WAMR),)
ifneq ($(wildcard $(APPDIR)/bin/wasm/ta_wxcodepay.xip),)
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/4EBA9EA8ACF42751AD93A5A4F03E1A67: FORCE
	cp $(APPDIR)/bin/wasm/ta_wxcodepay.xip $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/4EBA9EA8ACF42751AD93A5A4F03E1A67
else
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/4EBA9EA8ACF42751AD93A5A4F03E1A67: FORCE
	mkdir -p $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta
	touch $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/4EBA9EA8ACF42751AD93A5A4F03E1A67
endif
  RCRAWS += etc/ta/4EBA9EA8ACF42751AD93A5A4F03E1A67
endif
endif

ifeq ($(CONFIG_TA_PIN),y)
ifneq ($(CONFIG_INTERPRETERS_WAMR),)
ifneq ($(wildcard $(APPDIR)/bin/wasm/ta_pin.xip),)
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/EE571882BE621355ADAB1B7F23DEFAA6: FORCE
	cp $(APPDIR)/bin/wasm/ta_pin.xip $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/EE571882BE621355ADAB1B7F23DEFAA6
else
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/EE571882BE621355ADAB1B7F23DEFAA6: FORCE
	mkdir -p $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta
	touch $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/EE571882BE621355ADAB1B7F23DEFAA6
endif
  RCRAWS += etc/ta/EE571882BE621355ADAB1B7F23DEFAA6
endif
endif

ifeq ($(CONFIG_TA_KEYSTORE),y)
ifneq ($(CONFIG_INTERPRETERS_WAMR),)
ifneq ($(wildcard $(APPDIR)/bin/wasm/ta_keystore.xip),)
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/88A89F14B906EF4EBD96940EFFDABEF4: FORCE
	cp $(APPDIR)/bin/wasm/ta_keystore.xip $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/88A89F14B906EF4EBD96940EFFDABEF4
else
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/88A89F14B906EF4EBD96940EFFDABEF4: FORCE
	mkdir -p $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta
	touch $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/88A89F14B906EF4EBD96940EFFDABEF4
endif
  RCRAWS += etc/ta/88A89F14B906EF4EBD96940EFFDABEF4
endif
endif

ifeq ($(CONFIG_OPTEE_TEST_TA),y)
ifneq ($(CONFIG_INTERPRETERS_WAMR),)
ifneq ($(wildcard $(APPDIR)/bin/wasm/ta_crypt.xip),)
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/A05B3ECBF1ADE011998B0002A5D5C51B: FORCE
	cp $(APPDIR)/bin/wasm/ta_crypt.xip $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/A05B3ECBF1ADE011998B0002A5D5C51B
else
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/A05B3ECBF1ADE011998B0002A5D5C51B: FORCE
	mkdir -p $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta
	touch $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/A05B3ECBF1ADE011998B0002A5D5C51B
endif
  RCRAWS += etc/ta/A05B3ECBF1ADE011998B0002A5D5C51B

ifneq ($(wildcard $(APPDIR)/bin/wasm/ta_storage.xip),)
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/A7F289B6DF8A7A479F9932E90C0AD0A2: FORCE
	cp $(APPDIR)/bin/wasm/ta_storage.xip $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/A7F289B6DF8A7A479F9932E90C0AD0A2
else
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/A7F289B6DF8A7A479F9932E90C0AD0A2: FORCE
	mkdir -p $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta
	touch $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/A7F289B6DF8A7A479F9932E90C0AD0A2
endif
  RCRAWS += etc/ta/A7F289B6DF8A7A479F9932E90C0AD0A2

ifneq ($(wildcard $(APPDIR)/bin/wasm/ta_storage2.xip),)
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/9E271E73FBAA7545A77138CAA6F0CCA6: FORCE
	cp $(APPDIR)/bin/wasm/ta_storage2.xip $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/9E271E73FBAA7545A77138CAA6F0CCA6
else
$(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/9E271E73FBAA7545A77138CAA6F0CCA6: FORCE
	mkdir -p $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta
	touch $(TOPDIR)/$(ARCH_BOARD_CUSTOM_DIR)/src/etc/ta/9E271E73FBAA7545A77138CAA6F0CCA6
endif
  RCRAWS += etc/ta/9E271E73FBAA7545A77138CAA6F0CCA6

endif
endif
