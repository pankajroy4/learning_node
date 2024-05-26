/*
The inquirer module:
====================
Inquirer is an 3rd party NPM module that provides an easy way to capture user input in our Node.js CLI applications.
we can ask question, provides choises like list, radio buttons and many more.

It provides several methods for asking questions and returning answer from the user that can be accessed by a .then() promise functions because it wrap the answers provided by user in a object in key-value pair and return it as a promise.
As it use promise so it also support async-await.

We first need to install the module as:
  npm install inquirer

Note: The latest version of inquires is 9.2.6 which supports EJS module system and do not support commonJS module system so we can not use require() , rather we have to use: import inquirer from "inquirer".

To use import syntax, we have to modify the package.json file.
In package .json file we have add one key-value pair:
  "type": "module",

{ 
  "type": "module",
  ....,
  ....,
  ....,
}

When we modify package.josn then through out the application for all module(core, local, third-party) we have to use import syantx, we can not use both require() and import syntax together. We can use any one at a time.
===============================================

There are various methods availabe in inquirer module.

1. inquirer.prompt()

example1:

  import inquirer from "inquirer";
  inquirer.prompt([{name: "favMovie", message: "What is your favourite movie?"}]).then((answer)=>{
    console.log(answer)
    console.log(`Your favourite movie is ${answer.favMovie}`)
  })

  output:
        {favMovie: ......}

  This mehtod takes an array of objects. Each object atleast have two key-value pair as "name" and "message".

  To the key "message" we pass the value which should be displayed on the console for user.

  To key "name" we pass the value which will be treated as key to value entered by user, and then this object will be returned as promise.

  In our example: the object {favMovie: "answer_by_user"} will be returned as promise.

=================================================

Setting up default value:
-------------------------
Inquirer allows us to setup a default value when asking the question to the user.
This allows the user to press ENTER without submitting any answer and the default value wiil be used as answer.

example:
  import inquirer from "inquirer";
  inquirer.prompt([{ name: "favMovie", message: "What is your favourite movie?", default: "Bahubali" }]).then((answer) => {
  console.log(answer)
  console.log(`Your favourite movie is ${answer.favMovie}`)
})

We can also ask multiple questions as we know inquirer.prompt() method accepts an array of objects.
That's why we can string a series of prompts questions together and all the aswer will be available by name as part of the answer variable once all of the prompts have been resolved.

example:
import inquirer from "inquirer";
inquirer.prompt([
    {
      name: "favMovie",
      message: "What is your favourite movie?",
      default: "Kedarnath",
    },
    {
      name: "favActor",
      message: "Who is your favourite actor?",
      default: "Sushant sing rajput",
    },
  ])
  .then((answer) => {
    console.log(answer);
    console.log(`Your favourite movie is ${answer.favMovie}`);
    console.log(`Your favourite actor is ${answer.favActor}`);
  });

======================================================
Providing choises:
------------------------------------------------------
We can provides choises to user in different way through inquirer module.
The popular one to provide choises to user is list.

This can we done by adding 2 more key_value pairs to the inquirer.prompt() method.
They are: 1. type: some text
            The default value of type is "input"
            There are multiple values of type. For example: list, rawlist, expand etc.
          2. choises: an array

User can use arrow-keys to select any option.

example1: type: "list"
  import inquirer from "inquirer";
  inquirer.prompt([
    {
      name: "popLang",
      message: "Acc to github, which lang was most popular lang of 2022?",
      type: "list",
      choices: ["Python", "JavaScript", "Java", "Go"],
      default: "JavaScript",
    },
  ])
  .then((answer) => {
    console.log(answer);
    console.log(`Your answer is ${answer.popLang}`);
  });

-----------------------------------------------------------------------
Inquirer also gives the feature to give index(starts from 1) to each choises and user can enter the index for the answer.

For this we just have to use "rawlist" as a value to type.
If user enter any wrong index, user will ask to enter valid index and will asked to enter answer again.

example2: type: "rawlist"
  import inquirer from "inquirer";
  inquirer.prompt([
    {
      name: "popLang",
      message: "Acc to github, which lang was most popular lang of 2022?",
      type: "rawlist",
      choices: ["Python", "JavaScript", "Java", "Go"],
      default: "JavaScript",
    },
  ])
  .then((answer) => {
    console.log(answer);
    console.log(`Your answer is ${answer.popLang}`);
  });

---------------------------------------------------------------------- 
Using type: "expand"
------------------------
The type: "index" is reminiscent of some command-line applications that present us with a list of characters that map to functionality that can be entered.
expand prompts will initially present the user with a list of the available characters values and give context to them when the key is pressed. For example asking for gender. M- male , F- female.

Note:
when we use type: "expand", the key choises will accepts an array of objects.
In each object we set two key-value pair.
  {key: "m", value: "male"}
  {key: "f", value: "female"}
  The value to the key "key" will be shown to user,and to key "value" we set the value which is retunred when user enter the key.
  
  Here if user enter m, then in answer we will get "male".
 
User can enter 'h' or 'H, extends for help, and then press ENTER to expand the 
lists.

Note: Here keys are case in-sensative.

Example: type: "expand"
  import inquirer from "inquirer";
  inquirer.prompt([
    {
      name: "gender",
      message: "Choose your gender:",
      type: "expand",
      choices: [
        { key: "m", value: "male" },
        { key: "f", value: "female" },
        { key: "o", value: "other" },
      ],
      default: { key: "m", value: "male" }
    },
  ])
  .then((answer) => {
    console.log(answer);
    console.log(`Your gender is ${answer.gender}`);
  });
-----------------------------------------------------------------
Using type: "checkox"
-----------------------
The type: 'checkbox' is also similar to list.
The only difference is that instead of a single selection, it allows user to select multiple choises.

User can use arrow key to move arrow and press space-bar to select.

example: type: "checkbox"
  import inquirer from "inquirer";
  inquirer.prompt([
    {
      name: "known",
      message: "What all programming languages yoou know?",
      type: "checkbox",
      choices: ["Java", "Python", "JavaScript", "Go", "PHP", "C++"]
    },
  ])
  .then((answer) => {
    console.log(answer);
    console.log(`Your know these programming languages: ${answer.known}`);
  });

-----------------------------------------------------------------------
Using type: "password"
-----------------------
The type: "password" will hide input from the user.
This allow user to provide sensitive information that should not be seen.

exmple: type: "password"
  import inquirer from "inquirer";
inquirer.prompt([
    {
      name: "pwd",
      message: "Enter the secret key:",
      type: "password"
    },
  ])
  .then((answer) => {
    console.log(answer);
    console.log(`Your secret key is ${answer.pwd}`);
  });
*/ 