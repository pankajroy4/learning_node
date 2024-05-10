/* writing/Reading object in files 
   ============================
We can not pass object to writeFileSync(), writeFile() directly, as we know it accepts either string or buffer object.  

So to write object in fileURLToPath, we have to convert the object into JSON string using JSON.stringify() method. 
It accepts js object and return json string which can easily we written in file.

While reading the file, as we know, readFileSync() or readFile() will return string or buffer object.
We can easily covert this string to js object using JSON.parse().
If reading file returns buffer objetc then first we have to use toString(), then we can use JSON.parse() to get js Object.  
*/

// const fs = require("fs");
// const favActor = { name: "Pankaj Tripathi", movie: "Mirzapur" };

// let status = true;
// const path = "./text_files/actor.json";

// function writeObject(path, obj) {
//   try {
//     const json_string = JSON.stringify(obj);
//     fs.writeFileSync(path, json_string);
//   } catch (err) {
//     console.log("Error in writing object");
//     status = false;
//   } finally {
//     return status;
//   }
// }

// function readObject(path) {
//   try {
//     const str = fs.readFileSync(path, "utf-8");
//     const obj = JSON.parse(str);
//     console.log(obj);
//     console.log("Object read successfully!");
//     console.log(`name: ${obj.name}, movie: ${obj.movie}`);
//   } catch (err) {
//     console.log("error in reading object..");
//   }
// }

// let result = writeObject(path, favActor);
// if (result) {
//   console.log("Object written successfully!");
//   readObject(path);
// }

/*
===========================================
Renaming files 
===========================================  
In async mode: 
fs.rename(oldPath, newPath, callback) 
callback will runs after the execution of fs.rename() completed. Callback will be executed in both , rename success or fails.  
*/

// const fs = require('fs')
// const old_path = "./text_files/message.txt"
// const new_path = "./text_files/sandesh.txt"

// fs.rename(old_path, new_path, (err)=>{
//   if(err){
//     console.log("File rename failed: " + err)
//   }
//   else{
//     console.log("File renamed successfully!")
//   }
// })

/*
===========================================
Deleting files 
===========================================  
In async mode: 
fs.unlink(filePath, callback) 
callback will runs after the execution of fs.unlink() completed. Callback will be executed in both , delete success or fails.  
*/

// const fs = require('fs')
// const path = "./text_files/demo_file.txt"


// fs.unlink(path, (err)=>{
//   if(err){
//     console.log("File deletion failed: " + err)
//   }
//   else{
//     console.log("File deleted successfully!")
//   }
// })

/*
=============================================
Working with Directories using fs module
=============================================
Common methods for creating, reading and deleting: 
1. fs.mkdir() : It create the directory or folder  
2. fs.readdir() : It lists the contents(including sub folder) of a directory.
3. fs.rmdir()  : It deletes the folder.

1. fs.mkdir(path, options, callback)
   It takes three arguments. a) The directory path, b) The options is an object indicating the recursive creation, c) A callback function that is called when the method is completed.  
   Note: This callback will have two argument.
        if directory creation success then in 1st argument which represents error will be null and in 2nd argument which represent path will have the path of the newly created directory and vice-versa.
        The 2nd argument present only if recursive is true.
  const options = {recursive: true}
*/
  
  const fs = require('fs')
  const f_path = "./text_files/media/videos"
  const options = {recursive: true}
  fs.mkdir(f_path,options, (err, path)=>{
    if(err){
      console.log("Directory creations failed: " + err)
    }
    else{
      console.log("Directory created successfully! Path is :" + path)
    }
  })