const EventEmitter = require("events");

let emitter = new EventEmitter();

emitter.on("newUser",(name, id)=>{
  console.log(`A new user registered by the name ${name} with the id ${id}`);
})

emitter.emit("newUser", "Amit", 101);  
emitter.emit("newUser", "Deepak", 102);  
emitter.emit("newUser", "Sumit", 103);  