const chalk = require("chalk")

console.log(chalk.green("Welcome to Node.js"))
console.log(chalk.red.underline("Learning node is fun!"))
console.log(chalk.yellow.underline.bold("Learning node is fun!"))


console.log(chalk.red.bgGreen("Welcome to Node.js"))
console.log(chalk.red.bgGreen.inverse("Welcome to Node.js"))