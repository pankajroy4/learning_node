/*
Managing Routes:
==========================
Most websites we visit or APIs we use , usually have more than one endpoint so we can access various resources. 

For example , in a library management app , we not only need to manage book data, but it would also manage author data for cataloguing and searching convenience.

Even though the data for books and authors are related, but they are two different objects. 

In these cases, a backend developer will code each object on different endpoints as a way to indicate to the API user what kind of data they are interacting with.
And this is called Routing.

So , Routing is a way for our application to determine how to respond to a requesting client. 

This is done by simply matching the URL in the request object.

============================================
How to get the url ?
---------------------------------------------
Each request object has a url property. 
This property returns the url mentioned after the port no .
For example: If the requested url is localhost:8000/admin then request.url will return /admin


Example:
  const http = require("http");
  let books = [
    { bookName: "Beginning Node.js", price: 375, authorName: "Lenin" },
    { bookName: "Introduction to React", price: 635, authorName: "Aggrawal" },
  ];

  let authors = [
    { authorName: "Lenin", country: "Brazil" },
    { authorName: "Aggrawal", country: "USA" },
  ];

  const requestLinstener = (req, resp)=>{
    resp.setHeader("Content-Type", "application/json")
    switch(req.url){
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
          resp.end(JSON.stringify({error: "resource not found!"}));
    }
  }

  const server = http.createServer(requestLinstener);
  server.listen(8000);
  console.log("Server started and listening at port 8000");


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


Later These route hanadling will be done by express internally.
*/