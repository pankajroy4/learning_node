// Errors in file Handling:
/* =========================================
  ENOENT - No shuch file or directory 
  EACCES - Permission denied
  EEXIST - File already present
  ==========================================

  Handling errors:
  If we are using synchronous mode, then to handle these errors we can simply use try-catch block to wrap our file related function calls.
*/

// const fs = require('fs')
// const path = "./text_fis/message.txt" //wrong path
// const str = "Welocme to Node.js"
// let today = new Date();
// let currentDateTime = today.toLocaleDateString() + "," + today.toLocaleTimeString()

// let msg =  str + "\n" + currentDateTime
// try {
//   fs.writeFileSync(path, msg) 
//   console.log("File saved successfully!")

// }catch(error){
//   console.log("Error in writing the file .." + error)
// }
// console.log("Bye......")

// If we are using the sync mode, then we can use the if statement to detemine the error type and take the remedial action.
//  In async mode, as we know , exception occur or not , callback will be executed , so in callback we will check for error
// =========================================================================================================================
// const fs = require('fs')
// const path = "./text_fis/message.txt" //wrong path
// const str = "Welocme to Node.js"
// let today = new Date();
// let currentDateTime = today.toLocaleDateString() + "," + today.toLocaleTimeString()

// let msg = str + "\n" + currentDateTime

// fs.writeFile(path, msg, (error) => {
//   if (error && error.code === 'ENOENT')
//     console.log("Wrong path given.." + error)
//   else if (error && error.code === 'EACCES')
//     console.log("Permission denied!")
//   else if(error)
//     console.log("Error in writing the file.."+ error)
//   else 
//     console.log("File saved successfully!")
// })
// console.log("Bye......")

/*
==================================================
 The options PARAMETER
==================================================
The third parameter of the writeFileSync() or writeFile() method is an object with three optional properties, Each property has their own default values:
  1.encoding : form of data writing in file eg: binary or textual: utf8(default) , base64 that is binary etc.
  2.mode : It deals with permissions of file for the newly created File. default value(0o666) in octal
  3.flag : It controls how the file will be created and written on. Default value of flag is 'w', which creates the file(if not exist) or overwrites the file with new data.
  Other flags are:
                'a' : creates the file(if not exist) or appends to the existing data.
                However,we also have a different method for appending callled appendFile().

                'ax' or 'wx' : creates the file (if not exist) or throw ERROR (if it already exist).

                and so many...
*/

// const fs = require('fs')
// const path = "./text_files/index.txt"
// const str = "Welocme to Node.js"
// let today = new Date();
// let currentDateTime = today.toLocaleDateString() + "," + today.toLocaleTimeString()

// let msg = str + "\n" + currentDateTime
// options = {flag: 'wx'}

// fs.writeFile(path, msg, options, (error)=>{
//   if(error && error.code === 'EEXIST')
//     console.log("File aready present!" + error)
//   else if (error) 
//     console.log("Error in creating the file..")
//   else 
//     console.log("File created and data saved successfully!")
// })
// console.log("By..")

/*
==========================================================================
Reading Data from file:
==========================================================================
The Node.js module provides three function for reading file in same manner like writing.
One synchronous and two ansynchronous.

1. readFileSync(path, options)
2. readFile(path, options, callback)
3. readFile(path, mode) //return promise

readFileSync(path, options)
===============================
path : It is a string, buffer or URL that denotes the path of the file.
options : It is an OBJECT or a STRING to represent the encoding format of the file content to be read.
It return any one of two : 'buffer' or a 'string'.
When we do not pass the options argument then , then bydefault it return buffer.
 Now on buffer object we can call toString() method 
*/

// const fs = require('fs')
// const path = "./text_files/message.txt"
// try {
//   const data = fs.readFileSync(path, 'utf8')
//   console.log("File read successfully!")
//   console.log(data)
// } catch (error) {
//   console.log("Error in reading the file .." + error)
// }
// console.log("Bye......")

// =======================================================

// const fs = require('fs')
// const path = "./text_files/message.txt"
// try {
//   const data = fs.readFileSync(path)
//   console.log("File read successfully!")
//   console.log(data)
//   console.log(data.toString())
// } catch (error) {
//   console.log("Error in reading the file .." + error)
// }
// console.log("Bye......")
// =========================================================
/*
2. readFile(path, options, callback) 
    path: A String, buffer or URL  
    options: An objecct or a string to represent the encoding format of the file content to be read . If we do not pass options argument then in callback buffer will be returned.
    callback:  it will called when readFile() execution finised.
              NOTE: This callback can take two argument unlike the callback of writeFile() method whose callback takes one aagriment.  
              1st argument : error 
              2nd argument : Data readen from file.  
*/

// const fs = require('fs')
// const path = "./text_files/message.txt"
// fs.readFile(path, 'utf8', (error, data) =>{
//     if(error && error.code === 'ENONT')
//       console.log(("File not found !"))
//     else if(error) 
//       console.log("Error in reading the file: " + error)
//     else {
//       console.log("File read successfully!")
//       console.log(data)
//     }
// })
// console.log("Bye......")

// ---------------------------------------------------

// const fs = require('fs')
// const path = "./text_files/message.txt"
// fs.readFile(path, (error, data) => {
//   if (error && error.code === 'ENONT')
//     console.log(("File not found !"))

//   else if (error)
//     console.log("Error in reading the file: " + error)
//   else {
//     console.log("File read successfully!")
//     console.log(data)
//     console.log(data.toString())
//   }
// })
// console.log("Bye......")


/*
 ============================================
  Appending Data to File 
  1. appendFileSync(path, data, options)
  2. appendFile(path, data, options, callback)
  Both creates the File(if not present) and append the data to that File. 
============================================
*/

// const fs = require('fs')
// const path = "./text_files/message.txt"
// const str = "\nHello from Node.js"
// let today = new Date();
// let currentDateTime = today.toLocaleDateString() + "," + today.toLocaleTimeString()
// let msg = str + "\n" + currentDateTime

// try {
//   fs.appendFileSync(path, msg)
//   console.log("File appended successfully!")
// } catch (error) {
//   console.log("Error in appending the file .." + error)
// }
// console.log("Bye......")

// --------------------------------

const fs = require('fs')
const path = "./text_files/message.txt"
const str = "\nGreeting from Node.js"
let today = new Date();
let currentDateTime = today.toLocaleDateString() + "," + today.toLocaleTimeString()
let msg = str + "\n" + currentDateTime

fs.appendFile(path, msg, (error) => {
  if (error)
    console.log("Error in appending the file .." + error)
  else
    console.log("File appended successfully!")
})
console.log("Bye......")
