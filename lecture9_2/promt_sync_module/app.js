// Example 1:

// const prompt = require("prompt-sync")();
// let userName = prompt("What is your name? ");
// console.log(`Hello ${userName}, welcome to Node.js`);

// Example2:

const setUp = require("prompt-sync")
const prompt = setUp();

let num1 = Number(prompt("Enter first number: "))
let num2 = Number(prompt("Enter second number: "))
console.log(`Numbers are ${num1} and ${num2} and their sum is ${num1+num2}`)
