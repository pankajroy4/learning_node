const http = require("http");

const requestListener = (request, response) => {
  console.log("New request arrived...");
};

const server = http.createServer(requestListener);

server.listen(8000);
console.log("Server started and listening at port 8000");
