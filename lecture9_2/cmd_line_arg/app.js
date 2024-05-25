const chalk = require("chalk")
let nums = process.argv.slice(2, process.argv.length)

if (nums.length < 2) {
  console.log(chalk.blue("Please pass atleast two numbers"));
  process.exit();
}

try{
  let sum = 0;
  nums.forEach(num => {
    if (isNaN(num))
      throw Error("Please pass Numbers only!");
    sum += Number(num)
  });

  console.log(chalk.green(`Sum is ${sum}`))
  console.log(chalk.green(`Average is ${(sum / nums.length).toFixed(2)}`))
}
catch(error){
  console.log(chalk.red(error))
}