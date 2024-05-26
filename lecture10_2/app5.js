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
