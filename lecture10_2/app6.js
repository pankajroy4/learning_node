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
      ]
    },
  ])
  .then((answer) => {
    console.log(answer);
    console.log(`Your gender is ${answer.gender}`);
  });

  