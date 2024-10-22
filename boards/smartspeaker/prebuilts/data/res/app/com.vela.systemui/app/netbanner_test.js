let channel = require("system.messageChannel");

channel.print("netbanner test: switch 300 times");

let topic = "systemui.netbanner";

for (let i = 0; i <= 10; i++) {
    channel.notifyMessage(topic, "netoff");
    channel.notifyMessage(topic, "neton");
}

