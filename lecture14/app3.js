const EventEmitter = require("events");
let emitter = new EventEmitter();

emitter.once("newUser", (user) => {
  console.log(
    `A new user registered by the name ${user.name} with the id ${user.id}`
  );
});

emitter.emit("newUser", { name: "Amit", id: 101 });
emitter.emit("newUser", { name: "Deepak", id: 102 });
emitter.emit("newUser", { name: "Sumit", id: 103 });

//Here on 2nd and 3rd call, no event will be fired
