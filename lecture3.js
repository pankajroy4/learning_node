// fs module 
// ================
// 1.Synchronous API 
  // Block the main threads:
  // const fs = require('fs')
  // const data = fs.readFileSync(path);
  // console.log(data)

  // Uses : connecting to db using credential from a file.
/*
2. Callback API 
   Interact with file system in an asynchronous way.
   Each of the callback API function accepts a callbak function that is invoked when the operation(with file) is completed.  
*/
  //  const fs = require('fs')
  //  fs.readFile(path, (err, data) => {
  //     if(err){
  //       console.log(err);
  //     }else{
  //       console.log(`File read complete, data: ${data}`);
  //     }
  //  });
   
  //  Using callbacks in asynchronous programming ogten results in "CallBack Hell".  
/*
3. Promise based API  
    Works same as the callback API, but instead of a callback a Promise is returned 
*/
    // fs.readFile(path, "utf8")
    // .then((data)=>{
    //   console.log(data);
    // })
    // .catch((e)=>{
    //   console.log(e.message)
    // })

    // console.log("Reading file...")  //do not wait
  
/*
======================================
Checking For File Existence
======================================
There are 3 such methods , but the 3rd one is related with promise, so we will learn 2 method now and 3rd mathod later.   

1. fs.existsSync(path) 
  Returns true/false
    path : it can be given in three ways.   
          a). String    
          b). Buffer (a special object) 
          c). URL    

WAS to check whether a file called message.txt is present in the text_files folder of your app.    
NOTE :  './'  it represents current folder
*/  
    // const fs = require('fs')
    // const path = './text_files/message.txt';
    // if(fs.existsSync(path)) 
    //   console.log("File present")
    // else{
    //   console.log("File does not exist");
    // }
    // console.log("By....")
/*
2. fs.access(path, mode, callback)
    Does not return anything
    mode: This is 2nd agrument which deals with Permissions, which we will learn later. The default value of mode is fs.constants.F_OK

    callback: The callback method would be called when the the access mthod finished it's execution. It accepts a single argument representing error.
*/
    // const fs = require('fs')
    // const path = './text_files/message.txt';
    // fs.access(path, (error)=>{
    //   if(error){
    //     console.log(error)
    //     console.log("File does not exist")
    //   }
    //   else 
    //     console.log("File present")
    // })
    // console.log("By....")  // Do not wait, async behaviour
/*
============================
 Writing Data To File  
============================
The fs module provides 3 such methods , but the 3rd one is related with promise, so we will learn 2 method now and 3rd mathod later. 

  1. writeFileSync(path, data, options) 
    options: 3rd argument, we will discuss it later. 
    path: String, buffer or URL ,the path of the file or directory in which writing is to be done. If the file is not present it gets created and if present it gets overwritten(bydefault, can we handled using options). 

    If writing fails, it throw expectation.
    for example when wrong path given.
*/
    const fs = require('fs')
    const path = "./text_files/message.txt" 
    const str = "Welocme to Node.js"
    let today = new Date();
    let currentDateTime = today.toLocaleDateString() + "," + today.toLocaleTimeString()

    let msg =  str + "\n" + currentDateTime
    fs.writeFileSync(path, msg)
    console.log("File saved !")


  // 2. writeFile(filename, data, options, callback)   


  // 51 Minutes