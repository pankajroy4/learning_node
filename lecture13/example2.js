/*
Till now we create the instance of EventEmitter directly, But this is not good practise.
===================================
Creating custom EventEmitter:
-----------------------------------
Node strongly recommends to create our own EventEmitter class by extending the EventEmitter class.
Such EventEmitter class is called as custom event emitters.

This allow our custom event to inherit all the functionality of the EventEmitter class, such as the on() ans emit() methods.
We can also add our own functionality.
Example:
      In MessageEmitter.js file:
      ---------------------------
      const EventEmitter = require("events");

      class MessageEmitter extends EventEmitter{
        constructor(){
          super();
        }

        sendMessage(message){
          this.emit("notify", message);
        }
      }

      module.exports = MessageEmitter

      In app.js file:
      ------------------------------
      const MessageEmitter = require("./MessageEmitter.js")

      const msgEmitter = new MessageEmitter();

      msgEmitter.on("notify", (message)=>{
        console.log(`Notification received: ${message}`)
      })

      msgEmitter.sendMessage("Welcome to custom  Events programming in Node.js!")
      msgEmitter.sendMessage("This is really fun!")


 NOTE:
      Event handler must be defined before the emit.
*/
