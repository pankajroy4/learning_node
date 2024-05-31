/* 
  We can register multiple listener for multiple event of an EventEmitter object: 
*/

const EventEmitter = require("events");

let emitter = new EventEmitter();

emitter.on("login",()=>{
  console.log(`user logged in....`);
})

emitter.on("logout",()=>{
  console.log(`user logged out....`);
})

emitter.emit("login");
emitter.emit("logout");