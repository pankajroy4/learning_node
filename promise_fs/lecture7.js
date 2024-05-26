// const fsPromises = require("fs/promises");
// const path = "./text_files/message.txt";
// let pr = fsPromises.access(path);
 //here callback of then is not having any argument because as we read above , if promise get resolved it return a promise object with undefined.
// pr.then(() => {
//   console.log("File exist!");
// }).catch((err) => {
//   console.log("File does not exist: " + err);
// });


// Using async await with fs/promises:
// ========================================
// Better version of above code 

// const fsPromises = require("fs/promises");
// const path = "./text_files/message.txt";

// async function checkFile(path){
//   try{
//     await fsPromises.access(path);
//     console.log("File present!")
//   }catch(err){
//     console.log("File not present!" + err)
//   }
// }

// checkFile(path)
// console.log("Bye....")
/*
As we know, await resolve the received promise and return the resolved value of promise if promise get resolved, but if promise rejected then await throw exceptation so we have used try catch.
  
As we know, if promises get resolved then fsPromises.access() will return promise with undefined as resolved value, so here await return undefined(The resolved value)
*/

/*
Setting permissions to file
================================

2. fsPromises.chmod(path, mode)
This method is used to change the permissions to a given path. 
path:  string, buffer or URL   
*mode: It is an integer value that denotes the permission to be granted, it can have values like: 
  fs.constants.S_IRUSR     0o400      read by owner
  fs.constants.S_IWUSR     0o200      write by owner
  fs.constants.S_IXUSR     0o100      execute/search by owner

  fs.constants.S_IRGRP     0o40      read by group
  fs.constants.S_IWGRP     0o20      write by group
  fs.constants.S_IXGRP     0o10      execute/search by group

  fs.constants.S_IROTH     0o4      read by others
  fs.constants.S_IWOTH     0o2      write by others
  fs.constants.S_IXOTH     0o1      execute/search by others

  All these predefined constant with their integer value present in fs.constants object

return value: Return a promise object with:
    * 'undefined' if resolved
    * 'error object' if rejected
Note: The WINDOW platform only support the changing of the write permission. It also does not support the distinction between the permissions of user, group or others.
*/

// const fs = require("fs");
// const fsPromises = require("fs/promises");
// const path = "./text_files/message.txt";

// async function setPermission(path){
//   try{
//     await fsPromises.chmod(path, fs.constants.S_IRUSR)
//     console.log("File permission set to read only!")
//   }catch(err){
//     console.log("Error in making read only :" +err)
//   }
// }
// setPermission(path)
/*
 -------------------------------------------
NOTE: Both the function chmod(path, mode) and access(path, mode) accepts mode as 2nd argument but they are different for both.
As we know for access() mode can be : fs.constants.F_OK etc and for chmod() mode can be fs.constants.S_IRUSR etc 

NOTE: We can combine more than one permission using bit wise or i.e | , single pipe, and pass it to argument as mode to access().
*/
// const fs = require("fs");
// const fsPromises = require("fs/promises");
// const path = "./text_files/message.txt";

// async function checkPermission() {
//   try{
//     await fsPromises.access(path, fs.constants.F_OK | fs.constants.W_OK)
//     console.log("File is present and writing allowed!")

//     await fsPromises.chmod(path, fs.constants.S_IRUSR)
//     console.log("File permission set to read only!")

//     await fsPromises.access(path, fs.constants.W_OK)
//     console.log("File is present and writing allowed!")
//   }catch(err){
//     switch(err.code) {
//       case "ENOENT":
//         console.log("File not present");
//         break;
//       case "EPERM":
//         console.log("Writing permission denied!");
//         break;
//       default:
//         console.log("Some exception occured: " + err)
//     }
//   }
// }

// checkPermission()

/*
Writing to file using promise API
=====================================
3. fsPromises.writeFile(path, data, options)
      options: It is an string or object that can be used to specify optional parameters that will affect the output. it contains encoding, mode and flag values.

      return value: Return a Promise object with:
        * 'undefined' : if resolved
        * 'error object' : if rejected
*/

// const fsPromises = require('fs/promises')
// const path = "./text_files/message2.txt"

// let str = "Welcome to Node.js"
// let today = new Date();
// let currentDateTime = today.toLocaleDateString() + "," + today.toLocaleTimeString()
// let msg =  str + "\n" + currentDateTime

// async function writeData(path, data){
//   try{
//     await fsPromises.writeFile(path, data);
//     console.log("File saved successfully!")
//   }catch(err){
//     console.log("Error in writing file: " +err)
//   }
// }

// writeData(path, msg)
// console.log("Done..")

/*
Reading from file using promise API
=====================================
3. fsPromises.readFile(path, options)
      options: It is an string or object that can be used to specify optional parameters that will affect the output. it contains encoding, mode and flag values.

      return value: Return a Promise object with:
        * 'file data' : if resolved
        * 'error object' : if rejected
      Note: Here we will get file data instead of undefined on resolving returned promise if it get resolved.
*/

const fsPromises = require("fs/promises");
const path = "./text_files/message2.txt";

async function readData(path) {
  try {
    let file_data = await fsPromises.readFile(path, "utf-8");
    console.log("File read successfully!");
    console.log(file_data);
  } catch (err) {
    console.log("Error in reading file: " + err);
  }
}

readData(path);
console.log("Done..");
