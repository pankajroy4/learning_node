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
So we listen on a given port, and every time we receive a request on that port, that http class raises an event.

We capture that event and generate the response.


Time: 40 minutes.
*/
