/*
===============================================
Working with fs module using Promise based api
===============================================
The Node.js team created a 'promises' object in the fs module that uses promise, while the main fs module continues to expose functions that use callbacks.

Every function that we had use till now have the promise based versions to work in async mode and they do not take any callback in argumnet rather they return a promise.

These all promise based function belongs to 'promises' object of fs module.

To use promise based interaction with fs module , we have to take three steps:

1. Import the fs/promises object
2. Call the desired functions of the promises object and receive the return value as a promise.
3. Consume the returned promise using then..catch or async..awit

--------------------

We can import the promises object from fs module in 2 ways:
1. Node.js v10.0.0: used as require('fs').promises
2. Node.js v14.0.0: also available as require('fs/promises')

Some important methods of promises object:
access(), writeFile(), appendFile(), readFile(), unlink(), mkdir(), readdir(), chmod() etc

1. fsPromises.access(path, mode)
   mode: it is an integer value that denotes the permission to be tested for, it can have the values fs.constants.F_OK, fs.constants.W_OK ,fs.constants.R_OK and fs.constants.X_OK.
   Its default value is fs.constants.F_OK
   fs.constants.F_OK : only check availability
   fs.constants.W_OK: check for writing allowed or not
   fs.constants.R_OK: check for reading allowed or not
   fs.constants.X_OK : check that execution allowed or not(executing the file)

   return value: Return a promise object with:
    * 'undefined' if resolved 
    * 'error object' if rejected
    
*/

const fsPromises = require("fs/promises");
const path = "./text_files/message.txt";
let pr = fsPromises.access(path);
//here callback of then is not having any argument because as we read above , if promise get resolved it return a promise object with undefined.
pr.then(() => {
  console.log("File exist!");
}).catch((err) => {
  console.log("File does not exist: " + err);
});
