const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  response.end("<h1>Hello from Node programming! </h1>");
};

const server = http.createServer(requestListener);

server.listen(8000);
console.log("Server started and listening at port 8000");
