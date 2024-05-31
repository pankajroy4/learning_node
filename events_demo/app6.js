/* 
  We can register a single listener multiple times for an event of an EventEmitter object:
    We can register a single listener multiple times for an event. First registration do not repalce the another registration. If we want to unregister the any registration then we have to remove it using removeListener(). So we can say registrations are not replaced rather they are removed.
  =============================================================
*/ 

const EventEmitter = require("events");

let emitter = new EventEmitter();

emitter.on("newUser",()=>{
  console.log(`user 1 registered....`);
})

emitter.on("newUser",()=>{
  console.log(`user 2 registered....`);
})

emitter.emit("newUser");