// import the events module
const EventEmitter = require("events");

// create instance of EventEnitter class
let emitter = new EventEmitter();

// Event registration
emitter.on("newUser",()=>{
  console.log("A new user registered...");
})

//Emit the event.
emitter.emit("newUser");  //Later this emit process will be done by node/http/express itself. We do not have to emit.

//we can emit an event multipe times.
emitter.emit("newUser")
emitter.emit("newUser")