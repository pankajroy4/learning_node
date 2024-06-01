const EventEmitter = require("events");

class MessageEmitter extends EventEmitter {
  constructor() {
    super();
  }

  sendMessage(message) {
    this.emit("notify", message);
  }
}

module.exports = MessageEmitter;
