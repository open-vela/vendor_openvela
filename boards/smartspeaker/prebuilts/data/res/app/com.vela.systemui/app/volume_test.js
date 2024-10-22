let channel = require("system.messageChannel");

channel.print("volume test: slide 300 times");

let topic = "systemui.volumebar";

for (let i = 0; i <= 300; i++) {
    for (let j = 0; j <= 100; j++) {
        channel.notifyMessage(topic, "volume:" + j);
    }
    for (let j = 100; j >= 0; j--) {
        channel.notifyMessage(topic, "volume:" + j);
    }
}
