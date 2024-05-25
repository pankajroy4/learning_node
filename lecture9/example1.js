/*
The Chalk Module:
=====================
NPM chalk is third-party node.js module that is used to add color and styling to text on the command line output.

To install chalk module run below command at app root folder:
 npm install chalk@4.1.2

Here we mention the version. If we do not mention the version then npm install the latest version.
Here we mentioned the version because latest version of chalk is 5.2.0 which do not support commonJS module system. It supports ejs module system i.e ESM so it do not support require().

So we mentioned the version 4.1.2 while installing chalk as it is a commonJS module and will support require().

Chalk module has the methods based on color name.

examples:
  const chalk = require("chalk")
  console.log(chalk.green("Welcome to Node.js"))
  console.log(chalk.red.underline("Learning node is fun!"))

As we can see, we can do chaining of methods in any order.

  console.log(chalk.yellow.underline.bold("Learning node is fun!"))

For more details: visit npm webiste -> https://www.npmjs.com/  for whole documentations.
*/