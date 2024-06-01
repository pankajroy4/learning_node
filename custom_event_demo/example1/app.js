const MessageEmitter = require("./MessageEmitter.js");

const msgEmitter = new MessageEmitter();

msgEmitter.on("notify", (message) => {
  console.log(`Notification received: ${message}`);
});

msgEmitter.sendMessage("Welcome to custom Events programming in Node.js!");
msgEmitter.sendMessage("This is really fun!");
