const http = require("http");

const server = http.createServer((request, response)=>{
  console.log("New request arrived...")
});

server.listen(8000);
console.log("Server started and listening at port 8000");
