import inquirer from "inquirer";
inquirer.prompt([
    {
      name: "known",
      message: "What all programming languages you know?",
      type: "checkbox",
      choices: ["Java", "Python", "JavaScript", "Go", "PHP", "C++"]
    },
  ])
  .then((answer) => {
    console.log(answer);
    console.log(`You know these programming languages: ${answer.known}`);
  });

  