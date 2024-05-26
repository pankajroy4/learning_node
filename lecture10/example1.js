/*
Letting the user exit:
=======================
By default, most terminal programs will exit with Ctrl + C.

This is because it send a SIGINT, or "singal interrupt" message indicating that a user waants to exit the program.

We can also add this feature in our program.
For this behaviour and make sure that our users can exit at will, we need to add a configuration object while calling the prompt-sync function.
This object is created with just one property called "sigint" with the value true:  {sigint: true}.

example:
  const setUp = require("prompt-sync")
  const prompt = setUp({sigint: true});
  console.log("press (Ctrl + C) any time to exit")

  let num1 = Number(prompt("Enter first number: "))
  let num2 = Number(prompt("Enter second number: "))
  console.log(`Numbers are ${num1} and ${num2} and their sum is ${num1+num2}`)

==================================================
*/