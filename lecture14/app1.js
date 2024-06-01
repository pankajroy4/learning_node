const EventEmitter = require("events");
let emitter = new EventEmitter();

let displayUser = () => {
  console.log("A new user registered...");
};

emitter.on("newUser", displayUser);

emitter.emit("newUser");
emitter.emit("newUser");
emitter.removeListener("newUser", displayUser);
emitter.emit("newUser");

//Here , on third call no event will fire.
