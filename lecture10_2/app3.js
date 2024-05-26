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
