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

  