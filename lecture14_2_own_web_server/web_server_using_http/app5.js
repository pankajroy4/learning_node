const http = require("http");

const requestListener = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>Hello from Node! </h1>");
};

const server = http.createServer(requestListener);

server.listen(8000);
console.log("Server started and listening at port 8000");
