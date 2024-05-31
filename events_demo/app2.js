const EventEmitter = require("events");

let emitter = new EventEmitter();

emitter.on("newUser",(name)=>{
  console.log(`A new user registered by the name ${name}`);
})

emitter.emit("newUser", "Amit");  
emitter.emit("newUser", "Deepak");  
emitter.emit("newUser", "Sumit");  