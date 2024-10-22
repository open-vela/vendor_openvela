let channel = require("system.messageChannel");

channel.print("gesture test: 0 ~ 300");

let topic = "systemui.retgesture"

channel.notifyMessage(topic, "start");
for (let i = 0; i <= 300; i++) {
    channel.notifyMessage(topic, "pos:" + i);
}
for (let i = 300; i >=0; i--) {
    channel.notifyMessage(topic, "pos:" + i);
}
channel.notifyMessage(topic, "end");

let a = 1.0;
for (let i = 1; i < 2000000; i++) { // stop 一段时间等动画完成
    // channel.print("" + i * 1.0);
    a = a * 1.00001;
}
channel.print("" + a);

channel.notifyMessage(topic, "start");
for (let i = 800; i >= 500; i--) {
    channel.print("pos:" + i);
    channel.notifyMessage(topic, "pos:" + i);
}
channel.notifyMessage(topic, "end");
