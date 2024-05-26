// Example 1:

// let names = process.argv.slice(2, process.argv.length)

// if(!names.length){
//   console.log("Good Evening Guest");
//   process.exit();
// }

// names.forEach(name => {
//   console.log(`Good Evening ${name}`)
// });

/*
runnig command: node app.js
output:
      Good Evening Guest

runnig command: node app.js Pankaj Mohan
output:
      Good Evening Pankaj
      Good Evening Mohan
*/
// ========================================

// Example 2:

// let nums = process.argv.slice(2, process.argv.length)

// if(nums.length < 2){
//   console.log("Please pass atleast two numbers");
//   process.exit();
// }

// try {
//   let sum = 0;
//   nums.forEach(num => {
//     if (isNaN(num))
//       throw Error("Please pass Numbers only!");
//     sum += Number(num)
//   });

//   console.log(`Sum is ${sum}`)
//   console.log(`Average is ${(sum / nums.length).toFixed(2)}`)
// }
// catch (error) {
//   console.log(error)
// }

/*
runnig command: node app.js
output:
      Please pass atleast two numbers

runnig command: node app.js 10
output:
      Please pass atleast two numbers

runnig command: node app.js Mohan
output:
      Please pass atleast two numbers

runnig command: node app.js Mohan 10
output:
      Please pass Numbers only!

runnig command: node app.js 10 33
output:
      Sum is 43
      Average is 21.50

runnig command: node app.js 10 33 34 89
output:
      Sum is 166
      Average is 41.50
*/
/*
Accepting User input Dynamically i.e during run time:
=====================================================
As we seen, Using command line agruments we paas the user input before running the application.

We also prefer to accepts user input during the execution of program dynamically.

For this:
  We use the third party module 'prompt-sync'. 
  we can install it as:
                      npm install prompt-sync
  It helps to capture user input during run time just like scanf() in c, cin>> in c++ and scanner() in java and prompt() in javascript available form window object which is delivered by web api.

Note:
    The first step in using prompt-sync module is load and run its setup functions as below:
      const prompt = require("prompt-sync")();  <-- Notice this.

      As we know when we require() any module, it return the thing which has been exported via module.exports.

      The module.exports of prompt-sync returns a function.
      We necessarily call this function and store its return value.
      We need to call this function because , To work prompt-sync properly, this function setup the memory creation or load its setup.

      So:
        const prompt = require("prompt-sync")(); 
      Here in prompt variable we strore the return value of the function. This return value is an Object, logically a function.

      This object/function prints the message which is passed to it and pause the console to accept input and it return the inputted values as a string.

      Note: The return value of prompt-sync() method is always a string.
      This is just like input() function of python.


      Example1:
         const prompt = require("prompt-sync")();
         let userName = prompt("What is your name? ");
         console.log(`Hello ${userName}, welcome to Node.js`);

      Example2:
         const setUp = require("prompt-sync"); <- store reference
         const prompt = setUp();
         let userName = prompt("What is your name? ");
         console.log(`Hello ${userName}, welcome to Node.js`);

*/