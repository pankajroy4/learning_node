const http = require("http");

const server = http.createServer();

server.on("connection", (socket)=>{
  console.log("A new client arrived...", socket);
})

server.listen(8000);
console.log("Server started and listening at port 8000")