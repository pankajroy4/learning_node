import inquirer from "inquirer";
import chalk from "chalk";
import validator from "validator";
import fs from "fs";
import fsPromises from "fs/promises"
import path from "path";
import qr from "qr-image"

async function getUrl() {
  try {
    let url = await inquirer.prompt([
      {
        name: "url",
        message: "Type in your URL: ",
      },
    ]);
    return url.url
  } catch (err) {
    throw Error(err);
  }
}

async function getImageType() {
  try {
    let type =  await inquirer.prompt([
      {
        name: "imageType",
        message: "Select the image type: ",
        type: "list",
        choices: ["png", "svg", "pdf"],
        default: "svg"
      },
    ]);
    return type.imageType
  } catch (err) {
    throw Error(err);
  }
}

async function generateQRCode(url, imageType){
  try{
    // let qrPath = path.join(__dirname, "Demo")
    let qrImg = qr.image(url, { type: imageType });
    qrImg.pipe(fs.createWriteStream("i_love_qr.svg"));
    // return fileName
  }catch(err){
    throw Error(err);
  }
}

async function doTask() {
  try {
    let url = await getUrl();
    console.log(chalk.blue(`you typed: ${url}`));
    if (!validator.isURL(url)) {
      throw Error("It is an invalid url!");
    }
    console.log(chalk.green("It is a valid URL!"))

    let imageType = await getImageType();
    let typeArr = ["png", "svg", "pdf"]

    if(!typeArr.includes(imageType) ){
      throw Error("Error while asking QR-image types!")
    }
    console.log(chalk.blue(`You selectd: ${imageType}`))

    let qrFilePath = await generateQRCode(url, imageType);

  } catch (err) {
    console.log(chalk.red(err.message));
    process.exit();
  }
}

doTask();
