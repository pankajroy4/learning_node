/* 
Event handling:
===================================
What are events?
-> An event is any activity that takes place while the application is running and it causes the application to do something or take some action.
  For example:
    In browser based JS , clicking a button is an event and in respond to that our application then executes some code.

    Signing up is an event and after signing up generating OTP is a resoonse to that event.
    On if we want to execute something on happening something then er use concept of event and event-handling.

What are events in NodeJS:
-----------------------------------
Similarly whenever something happens in the Node.js world, we call it an event.
For example:
    When a user opens a file (for example using fs module), we say that an event has occured/fired.

    If a file is read by any function like readFile(), it is said to be another event.
    There may be some error while reading a file, as error arises, callback will executed. Execution of this callback is an event.

Why we need to learn about events?
--------------------------------------
In node , we have a class called "http" that we will use to build our own web server.
So we listen on a given port, and every time we receive a request from client on that port, that http class raises an event.

We capture that event and generate the response.

Browser/client will send a request, which will be accepted by http and it raise an event then we capture this event and generate the response and return to browser/client.

when we will use 'http' later, then event will be fired by http and we have to capture it and generate the response. So in this case 'http' fire event for us.
But as of now we will use core module of node.js called 'events' module.
============================================================

The events Module
=========================================================
The 'events' module is core module of node.js. The events module allows us to easily create i.e raise and handle custom events in Node.js.

This module includes the 'EventEmitter' class, which is used to raise and handle the events.
The event module default exports the class 'EventEmitter' as module.exports = EventEmitter. So when we require this module then we will get EventEmitter class as:
  const EventEmitter = require('events');

As of now we will use events module so we ouselves have to fire event, capture it and generate the response.

In node , event raising is called : event emit, and code for  handling event is cllled : event listener.

Almost the whole of the Node.js core API is built around the events module, which emits named events that cause function(also called as listeners) to be called.

In events module , the most important class in EventEmitter class.
This class have many methods. The six mainly used methods are:

  1. addListener(event, listener) : Adds a listener to the listeners array for the specified event.
    event: This is first argument and it is a string. We can pass any string i.e we decide the name of event. For example "newUser". This is case-sensative.
    listener: This is a callback. It can be paramatrized or non-parametrized. It can accepts multiple arguments.
    The argument to the callback can be an object also.


  2. on(event. listener) : It can also be called as an alias of addListener()

  3. once(event, listener) : Adds a one-time listener for the event. This listener is invoked only the next time the event is fired, after which it is removed.

  4. emit(event, [arg1], [arg2], [...]) : Raises the specified events with the supplied arguments.

  5. removeListener(event, litener) : Removes a listener from the listener array for the specified event.

  6. removeAllListeners([event]) : Removes all listeners, of the specified event.


  NOTE: An event can be emitted mutiple times.
       We can register a single listener multiple times for an event. First registration do not repalce the another registration. If we want to unregister the any registration then we have to remove it using removeListener(). So we can say registrations are not replaced rather they are removed.
*/
