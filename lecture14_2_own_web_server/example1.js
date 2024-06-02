/* 
What is a web server?
==========================
When we view a webpage in our browser, we are making a request to another computer on the internet, which then provides us the webpage as a response.

That computer with which we are communicating via the internate is a web server.
So basically a web server is a computer that receives an HTTP requests from a client, like our browser, and provides an HTTP response, like an HTML page or JSON from an API.

How to create web server in Node:
==================================
There are mainly two ways to create a web server in node:
  1* Using a core module called "http"
      All the networking capabalities can be done with "http" module like chat application. But nowdays no one use "http" due to better options availabe like "express".

  2* Using a third party module called "express"

Using http module for creating web server:
=============================================
Node.js has a built-in module called http, which allows us to create an HTTP server that listens to server ports and gives a response back to the client.

With this we can easily create a backend service for our client applications.
Like a web application that we build with react or angular or a mobile application runnig on a mobile device

Steps needed to create web server using http:
==============================================
To create a web server using http module we need to take four steps:
    1. Import the http module, it will return an object called http, receive it.

    2. Call the function createServer() of http object. This function returns the server object, receive it.
    3. This server object fires an event called "connection". So we have create event handler. i.e we have to listen for the "connection" event.
    So using server object create an event-handler for "connection" event by calling the on() method.

    The server object fires the "connection" event when we call the listen() method of server object or we can say, when listen() method receive the client request. 

    4. Finally start the server and wait for the client request by calling the server object's method listen() passing it the required port number. 
    Here as soon as we call the method listen() on server object, the server object will fire the  "connection" event.

    As many times, listen() receive the request from client, the "connection" event will be fired.

    Actually, when listen() mehtod is called , it start listening and remain pause asynchronously, as soon as it recceive client request, it will fire the "connection" event.

Note:
    http.createServer() return the object of http.Server class.
    The server object we get by calling http.creteServer() is itself is an event emitter because  http.Server class inherits the net.Server class. And net.Server calss inherits the EventEmitter class , so server objet returned by http.createServer() is itself an event-emitter.

    So all the methods like on(), emit(), addListener(), off( ) etc will we available to server objetc.

Example:

    const http = require("http");
    const server = http.createServer();  //Later we will use "app" as variable name to receive server object.

    server.on("connection", (socket)=>{
      console.log("A new client arrived...", socket);
    })

    server.listen(8000);
    console.log("Server started and listening at port 8000")

  Here,
  When a client make a single request on localhost:8000, connection event will be fired twice, becuause when we handle event on socket level then actually brower make two request, one for main resource and second for favicon. 

=====================
A better way:
=====================
  The "connection" event is a very low level event which deals with socket object.
  As we define a listener for the connection event. Also we know, 2nd argument of a listener is a callback, Here in case of connection event, the callback will accept an argument where 'socket' obeject is passed when the event is fired.

  As connection event is very low level-event, So instead of handling request ini this way , we can directly pass a callback function to createServer() function with two object as argument: 1. request and 2. response. 
  These arguments will be sent by http module or node.
  The "request" object will holds the client details like url, data etc.
  The HTTP response that we return to the client is formed by interaction with the "response" object

  In this way, the 2nd request for favicon by browser will be eliminated.

Example:
    const http = require("http");
    const server = http.createServer((request, response)=>{
      console.log("New request arrived...")
    });

    server.listen(8000);
    console.log("Server started and listening at port 8000");

The argument to createServer() is a callback. Each callback should have a specific perpose. For example, We are developing an ECommerce app, this callback will do some particular task in this application, say for example Login/Register the user.

The recomended practise is that when we create callback for createServer() method, we should stroe it by giving a sensible name. For example if we are creating callback for login in employee app then we should name it "empLogin".
The most common name is "requestListener"

Example:
    const http = require("http");

    const requestListener = (request, response)=>{
      console.log("New request arrived...")
    }

    const server = http.createServer(requestListener);

    server.listen(8000);
    console.log("Server started and listening at port 8000");

====================================================
Sending response back to client:
====================================================
  Some Important methods and properties of response object:
  -----------------------------------------------------
  1. writeHead() : Send status and response headers to the client.
  
  2. getHeader() : Returns the value of the specified header.

  3. headersSent : It is a property of response object. Returns true if headers were sent, otherwise false.

  4. removeHeader() : Remove the specified header.

  5. setHeader() : Sets the specified header.

  6. statusCode  : It is a property of response object. Sets the status code that will be sent to the client.

  7. write() : Sends text, or a text stream to the client.

  8. end() : Signals that the the server should consider that the response is complete 

----------------------------------------------------------------
Note : In below methods arguments, [] represents that there can be multiple as well as single value.

1. writeHead():
   syntax:
      response.writeHead(statusCode, [headers]);

      The status code is a 3-digit HTTP status code, like 404. 
      In the last argument we can pass single or multiple values, http headers, are the response headers.

      headers can be : {"Content-Type": "text/plain"},
                       {"Content-Type": "text/html"},
                       {"Content-Type": "application/JSON"}
                      etc.

2. write():
   The write() sends a chunk of response body for a request. 
   syntax:
      response.write(chunk, [encoding], [callback]);
      
      chunk : It accepts any Buffer, or String Data. 
      Encoding : The default encoding set is ‘utf8‘. It accepts String Data. This is optional.
      callback : It accepts a callback function. This is optional. This callback will execute after sending response to client.

      After calling write(), we must have to terminate the connection. It is the responsibility of server.

3. end():
    The response.end() method is used to end the response process with or without data.
    Syntax:
      response.end([data], [encoding], [callback]);

      data : It accepts any Buffer, or String Data. Optional
      encoding : The default encoding set is ‘utf8‘. It accepts String Data. Optional
      callback : It accepts a callback function. Optional
    
    Here as we can see, we can use the end() instead of write(), because end() will do the task done by write().

Example 1:
        const http = require("http");

        const requestListener = (request, response) => {
          response.writeHead(200, {"Content-Type": "text/plain"});
          response.write("Hello from Node!");
          response.end();
        };

        const server = http.createServer(requestListener);

        server.listen(8000);
        console.log("Server started and listening at port 8000");

Example 2:
        const http = require("http");

        const requestListener = (request, response) => {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.end("<h1>Hello from Node! </h1>");
        };

        const server = http.createServer(requestListener);

        server.listen(8000);
        console.log("Server started and listening at port 8000");

Example 3:
        const http = require("http");

        const requestListener = (request, response) => {
          response.setHeader("Content-Type", "text/html");
          response.statusCode = 200;
          response.end("<h1>Hello from Node programming! </h1>");
        };

        const server = http.createServer(requestListener);

        server.listen(8000);
        console.log("Server started and listening at port 8000");

Later , when we will use express, these things will be more easier and simplified.

*/