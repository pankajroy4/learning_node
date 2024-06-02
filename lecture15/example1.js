/*
Returning Different types of content:
=========================================
In addition to the pain text, we can also return the following types of data:
  1.JOSON 
  2.CSV
  3.HTML
  etc.

  We must do this 2 thing:
    1. Set the Content-Type header in our HTTP responses with the appropriate value. If we return HTML, then we should set headers text/html.

    2. Ensure thaat write() or end() send the data in right format. Means if we set headers content-type as text/html, then we must pass html data to these methods.

=====================================================
Returning HTML
=====================================================
In order to return HTML reponse we need 2 steps:
 1. Set the Content-Type to text/html in writeHead(statusCode, {"Content-Type": "text/html"}) or setHeader("Content-Type", "text/html").
 2. Pass avalid HTML string as argument to write(html_data) or end(html_data)

Example1:
    const http = require("http");

    const requestListener = (request, response) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end("<h1>Hello from Node! </h1>");
    };

    const server = http.createServer(requestListener);

    server.listen(8000);
    console.log("Server started and listening at port 8000");
     
Example2:
    const http = require("http");

    const requestListener = (request, response) => {
      response.setHeader("Content-Type", "text/html" );
      response.statusCode = 200
      response.end("<h1>Hello from Node! </h1>");
    };

    const server = http.createServer(requestListener);

    server.listen(8000);
    console.log("Server started and listening at port 8000");

This is not the good practise to return html file.

It is preferable that we load HTML files and serve their content. Means we create the separate html file
This way, as the HTML file grows we don’t have to maintain long strings in our Node.js code, keeping it more concise and allowing us to work on each aspect of our website in an  independent way.

Steps needed:
=====================
  1.Create an html file called index.html with some code in it
  2.Import the “http” and “fs/promises” module
  3.Create a request listener which does the following:
    *. Opens and reads the file index.html
    *. If the file is read properly then sets the Content-Type to text/html in  writeHead() and status to 200
    *. Passes the file data as argument to write() .
    *. If an exception occurs , then sets the status to 500 and passes the error message to write()
    *. Completes the response by calling end()
  4.Create the server object by calling createServer()
  5.Start the server by calling listen()

Example:
    const http = require("http");
    const fsPromises = require("fs/promises");

    const requestListener = (req, resp) => {
      fsPromises.readFile("index.html", "utf-8")
        .then((data) => {
          resp.writeHead(200, { "Content-Type": "text/html" });
          resp.end(data);
        })
        .catch((err) => {
          resp.statusCode = 500;
          let msg = "";
          switch(err.code){
            case "ENOENT":
              msg = "File not found!";
              break;
            default:
              msg = "Some error occurred at the server"
          }
          resp.end(msg);
        });
    };

    const server = http.createServer(requestListener);
    server.listen(8000);
    console.log("Server started and listening at port 8000");

=============================================================
Returning JSON Data:
=============================================================
In order to return json response we need to take two steps:
    1.Set the Content-Type to application/json in writeHead() orsetHeader()
    2.Pass a valid JSON string as argument to write() or end()
    
  Example:
      const http = require("http");

      const requestListener = (request, response) => {
        let weather = {city: "Bhopal", temp: "42", forecast: "sunny"}
        let weatherJSON = JSON.stringify(weather);
        response.writeHead(200, { "Content-Type": "application/json" });

        response.end(weatherJSON);
      };

      const server = http.createServer(requestListener);

      server.listen(8000);
      console.log("Server started and listening at port 8000");

*/