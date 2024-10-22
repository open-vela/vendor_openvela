let channel = require("system.messageChannel");

channel.print("reboot page: show hide 300 times");

let topic = "systemui.rebootpage";

channel.notifyMessage(topic, "start");
for (let i = 0; i <= 300; i++) {
    channel.notifyMessage(topic, "show");
    channel.notifyMessage(topic, "ret");
}

channel.notifyMessage(topic, "end");
