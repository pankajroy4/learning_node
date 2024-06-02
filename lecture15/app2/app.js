const http = require("http");
let books = [
  { bookName: "Beginning Node.js", price: 375, authorName: "Lenin" },
  { bookName: "Introduction to React", price: 635, authorName: "Aggrawal" },
];

let authors = [
  { authorName: "Lenin", country: "Brazil" },
  { authorName: "Aggrawal", country: "USA" },
];

const requestLinstener = (req, resp) => {
  resp.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/books":
      resp.writeHead(200);
      resp.end(JSON.stringify(books));
      break;
    case "/authors":
      resp.writeHead(200);
      resp.end(JSON.stringify(authors));
      break;
    default:
      resp.writeHead(404);
      resp.end(JSON.stringify({ error: "resource not found!" }));
  }
};

const server = http.createServer(requestLinstener);
server.listen(8000);
console.log("Server started and listening at port 8000");

/* 
Requested url:
  http://localhost:8000/authors
Server response:
  [
    {
    "authorName": "Lenin",
    "country": "Brazil"
    },
    {
    "authorName": "Aggrawal",
    "country": "USA"
    }
  ]

Requested url:
  http://localhost:8000/books
Server response:
  [
    {
    "bookName": "Beginning Node.js",
    "price": 375,
    "authorName": "Lenin"
    },
    {
    "bookName": "Introduction to React",
    "price": 635,
    "authorName": "Aggrawal"
    }
  ]

Requested url:
  http://localhost:8000/books12
Server response:
  {
    "error": "resource not found!"
  }

*/
