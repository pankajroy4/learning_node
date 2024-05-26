import inquirer from "inquirer";
inquirer.prompt([{ name: "favMovie", message: "What is your favourite movie?" }]).then((answer) => {
  console.log(answer)
  console.log(`Your favourite movie is ${answer.favMovie}`)
})