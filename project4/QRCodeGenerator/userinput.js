const inquirer = require("inquirer");

async function getUrl() {
  try {
    let url = await inquirer.prompt([
      {
        name: "url",
        message: "Type in your URL: ",
      },
    ]);
    return url.url;
  } catch (err) {
    throw Error(err);
  }
}

async function getImageType() {
  try {
    let type = await inquirer.prompt([
      {
        name: "imageType",
        message: "Select the image type: ",
        type: "list",
        choices: ["png", "svg", "pdf"],
        default: "svg",
      },
    ]);
    return type.imageType;
  } catch (err) {
    throw Error(err);
  }
}

module.exports = {getUrl, getImageType}
