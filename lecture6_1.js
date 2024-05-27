/*
  FINDING CURRENT WORKING DIRECTORY IN NODE
==============================================
  There are two famous ways:
  1.) __dirname
    It is an environment varialbe that holds the absolute path of the directory containing the current executing file. It is available to each .js files in node.

    console.log(__dirname) 
    output: /home/ubuntu/PP_PROJECT/SCA/learning_node

Special Note:
================
  __dirname is a global variable in CommonJS modules, but not in ECMAScript modules (ESM). If you are using ESM (for example, if your package.json contains "type": "module" or if your file has a .mjs extension), __dirname is not available by default.

  To fix this, you can use the import.meta.url to get the current directory in ESM.
  Import the necessary modules using import instead of require.
  Use import.meta.url to create the equivalent of __dirname.
    Example:
          import path from 'path';
          import { fileURLToPath } from 'url';
          const __filename = fileURLToPath(import.meta.url);
          const __dirname = path.dirname(__filename);

          console.log(__dirname);

  2.) ./
    It also holds the absolute path of the directory containing the current executing file. But it causes poor code readability.

    console.log("./")
    output: ./

    If we want to use ./ and also want that our code to be readable, then we can use the 'path' module and it's function 'resolve' provided by node.

    const path = require('path')
    console.log(path.resolve("./"))
    output: /home/ubuntu/PP_PROJECT/SCA/learning_node

  NOTE:
   1) Node also provide an another variable:
    __filename : It indicating current excuting file name with full absolute path.

    console.log(__filename)
    output: /home/ubuntu/PP_PROJECT/SCA/learning_node/lecture6.js

    2) The path module has another popular function path.join().
      It takes multiple arguments and create a path from these agruments. 

      const path = require('path')
      console.log(path.join("abc", "efg", "pqr"))
      console.log(path.join(__dirname, "work.json"))
      output: abc/efg/pqr
              /home/ubuntu/PP_PROJECT/SCA/learning_node/work.json

=============================================
Working with Directories using fs module
=============================================

2. fs.readdir(path, options, callback)
   It takes three arguments. 
    a) The directory path, 
      b) The options is an object which specify which encoding would be used for the filenames/subfolder while reading and given to the callback agrument, the default is utf8.
      c) A callback function that is called when the method is completed.  
   Note: This callback will have two argument.
        if directory creation success then in 1st argument which represents error will be null and in 2nd argument which represents an array containing all the files and subfolders names which is stored at given path directory.


*/

  // const path = require('path')
  // const fs = require('fs')
  // const dirPath = path.resolve("./")
  // console.log(`current working directory is ${dirPath}`)
  // fs.readdir(dirPath, (err, files)=>{
  //   if(err){
  //     console.log("Reading failed: " + err)
  //   }
  //   else{
  //     console.log("Directory content read successfully!")
  //     console.log(`Total files in ${__dirname} are ${files.length}`)
  //     files.forEach((fileName) =>{
  //       console.log(fileName)
  //     })
  //   }
  // })


/*
  2. fs.rmdir(path, options, callback)
  It is also asynchronous and is used to delete a directory.
  Agruments:

    path: The direcorty name.

    options: It is an object that can be used to specify optionals parameters that will affect the operations. It has three properties: 
      a) recursive: A boolean value which specify if recursive directoy removal is performed.

      b) maxRetries: it is an integer value which specify the number of times Node.js will try to perform the operation when it fails due to any error. The operations are performed after the given retry delay. The opton is ignored if the recursive option is false. The default value is 0.

      c) retryDelay: It is an integer value which specify the time to wait in milliseconds before the operations is retried. The option is ignored if the recursive option is false. The default value is 100 milliseconds.
    
    callback: A function that is called when the method is completed. It takes one parameter called err if any error occured.

Note : If recursive is false, then the directory which is going to be deleted must be empty means it do not contain any sub folder or files, otherwise node thow error.
Note : fs.rmdir() is deprecated, use fs.rm() instead. 
*/

// const path = require('path')
// const fs = require('fs')
// const dirPath = path.join(__dirname, "Demo")

// console.log(`Trying to delete ${dirPath}`)
// fs.rmdir(dirPath, (err)=>{
//   if(err){
//     console.log("Deletion failed: " + err)
//   }
//   else{
//     console.log("Directory deleted successfully!")
//   } 
// })

// ------------------------------------------------


const path = require('path')
const fs = require('fs')
const dirPath = path.join(__dirname, "Demo")

const options = {recursive: true, maxRetries: 3, retryDelay: 200 }
console.log(`Trying to delete ${dirPath}`)
fs.rmdir(dirPath, options, (err)=>{
  if(err){
    console.log("Deletion failed: " + err)
  }
  else{
    console.log("Directory deleted successfully!")
  } 
})

