let channel = require("system.messageChannel");

let topic = "systemui.controlbar";

// channel.notifyMessage(topic, "start:normal");
// for (let i = 480; i >= 0; i--) {
//     channel.print("pos:" + i);
//     channel.notifyMessage(topic, "pos:0:" + i);
// }

// channel.notifyMessage(topic, "end");


channel.notifyMessage(topic, "start:black");
for (let i = 480; i >= 0; i--) {
    channel.print("pos:" + i);
    channel.notifyMessage(topic, "pos:0:" + i);
}

channel.notifyMessage(topic, "end");