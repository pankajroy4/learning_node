/* 
WAS to generate an event to display the number of seconds since the application started after every second.
The event should emit automatically.
*/

const EventEmitter = require("events");

let emitter = new EventEmitter();
let totalSec = 0;

emitter.on("update",(secondsElapsed)=>{
  console.log(`${secondsElapsed} second passed since the app started...`);
})

setInterval(()=>{
  totalSec++;
  emitter.emit("update", totalSec);
}, 1000)