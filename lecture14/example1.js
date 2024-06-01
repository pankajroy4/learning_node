/* 
Removing an event Listener:
=============================
Once we create an event listener, we can also remove it using the removeListener() method or off() method of EventEmitter class object.

To do so, we must have a reference to the callback function passed to the on() method.
Then we can call the removeListener() or off() method passing 2 arguments:
  1. The event name.
  2. The callback reference.
 Example:
    const EventEmitter = require("events");
    let emitter = new EventEmitter();

    let displayUser = ()=>{
      console.log("A new user registered...");
    }

    emitter.on("newUser", displayUser)

    emitter.emit("newUser"); 
    emitter.removeListener("newUser", displayUser);
    emitter.emit("newUser");

    //Here , on second time no event will fire.

Removing all listeners:
======================================================
If we want to remove all event listeners for a given event, we can use the removeAllListeners() method.

It takes a string argument for the event identifier. i.e it takes only one argument which is the name of event.

Example:
    const EventEmitter = require("events");

    let emitter = new EventEmitter();

    emitter.on("newUser",()=>{
      console.log(`user 1 registered....`);
    })

    emitter.on("newUser",()=>{
      console.log(`user 2 registered....`);
    })

    emitter.emit("newUser");
    emitter.removeAllListeners("newUser");
    emitter.emit("newUser");

    // Here on second call, no event  will be fired

Litening for the event just once:
=======================================
The EventEmitter object also provides a method by the name once(), which we can use to create a one-time event listener.

Once that event is fired, the listener stops listening.
  example:

    const EventEmitter = require("events");
    let emitter = new EventEmitter();

    emitter.once("newUser",(user)=>{
      console.log(`A new user registered by the name ${user.name} with the id ${user.id}`);
    })

    emitter.emit("newUser", {name: "Amit", id: 101});  
    emitter.emit("newUser", {name: "Deepak", id: 102});  
    emitter.emit("newUser", {name: "Sumit", id: 103}); 
    
    //Here on 2nd and 3rd call, no event will be fired
  */

