const EventEmitter = require("events");

let emitter = new EventEmitter();

emitter.on("newUser", () => {
  console.log(`user 1 registered....`);
});

emitter.on("newUser", () => {
  console.log(`user 2 registered....`);
});

emitter.emit("newUser");
emitter.removeAllListeners("newUser");
emitter.emit("newUser");

// Here on first call , event wiil be fired and both listeners will execute but on second call, no event  will be fired and no listeners will execute.
