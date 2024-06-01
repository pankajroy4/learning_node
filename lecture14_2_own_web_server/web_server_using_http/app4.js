const http = require("http");

const requestListener = (request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello from Node!");
  response.end();
};

const server = http.createServer(requestListener);

server.listen(8000);
console.log("Server started and listening at port 8000");
 