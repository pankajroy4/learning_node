/*
Accepting User Input:
========================
Node.js provides us many ways to accepts user input from console.

The two very popular approaches are:
 1. Command line arguments.
 2. Using prompt-sync module.


Command line arguments:
-------------------------
These arguments are passed when we run the app after the app name from command prompt.
eg:
  node my_app.js argument2 argument2
Here argument1 and argument2 are command line arguments.

These arguments will be passed to the my_app.js. Thses arguments will be stored in a array called as "process.argv". The array 'argv' is a property of 'process' object. 

As we know , node provides us two object called "global" which is similar to javascript's window object, and 2nd one is 'process' Object which is similar to javascript's document object.

By default, To evey node app, two command line arguments will be passed certainly and is store at index 0 and 1.
1. The path to node.exe
  The path where node.exe is stored in our local machine. 
2. The absolute path of the current executing file/app 

We can access the command line arguments in our app using process.argv.

Example: Suppose app name is my_app.js.
*/

// console.log("Number of arguments: ", process.argv.length)
// console.log(process.argv)

/*run the command: node my_app.js
output:
Number of arguments: 2
[
  '/home/user/.nvm/versions/node/v20.13.1/bin/node',
  '/media/user/Learning_node/lecture9_2/my_app.js'
]
*/

/*
Run the command: node my_app.js Hello Pankaj
Output:

Number of arguments:  4
[
  '/home/user/.nvm/versions/node/v20.13.1/bin/node',
  '/media/user/8bf0054b-e7f9-4b05-aa36-53ca11848492/Learning_node/lecture9_2/example1.js',
  'Hello',
  'Pankaj'
]

Note:
    Every command line arguments will be treated as string. So if we want to perform any operation on digits passed from command line arguments, first we have to convert to Number() and check for isNaN().
    -> isNaN(Number(10))  
*/

// ======================================================== 

