const setUp = require("prompt-sync")
const prompt = setUp({ sigint: true });
console.log("press (Ctrl + C) any time to exit")

let num1 = Number(prompt("Enter first number: "))
let num2 = Number(prompt("Enter second number: "))
console.log(`Numbers are ${num1} and ${num2} and their sum is ${num1 + num2}`)
