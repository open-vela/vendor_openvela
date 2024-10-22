let channel = require("system.messageChannel");

channel.print("scriptArgs:");
for (var arg of scriptArgs)
    channel.print(arg);

if (scriptArgs.length >= 3) {
    channel.notifyMessage(scriptArgs[1], scriptArgs[2]);
} else {
    channel.print("please provide two args!");
}