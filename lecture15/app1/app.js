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
