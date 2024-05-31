const EventEmitter = require("events");

function countDownTimer(seconds) {
  let id;
  let totalSec = 0;
  let emitter = new EventEmitter();

  id = setInterval(() => {
    totalSec++;
    emitter.emit("update", totalSec);

    if (totalSec == seconds) {
      emitter.emit("end");
      clearInterval(id);
    } else if (seconds - totalSec == 2) {
      emitter.emit("endSoon");
    }
  }, 1000);

  return emitter;
}

let emitter = countDownTimer(10);

emitter.on("update", (secondsElapsed) => {
  console.log(`${secondsElapsed} second passed since the app started...`);
});

emitter.on("endSoon", () => {
  console.log(`Last 2 seconds remaining...`);
});

emitter.on("end", () => {
  console.log(`CountDown ended...`);
});
