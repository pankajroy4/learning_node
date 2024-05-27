const chalk = require("chalk");
const validator =  require("validator");
const path = require("path");

const writeToFile = require("./filewriter.js")
const generateQRCode = require("./qrcode.js")
const userInput = require("./userinput.js")

async function QRCodeGenerator() {
  try {
    let url = await userInput.getUrl();
    console.log(chalk.blue(`you typed: ${url}`));
    
    if (!validator.isURL(url)) {
      throw Error("It is an invalid url!");
    }
    console.log(chalk.green("It is a valid URL!"));

    let imageType = await userInput.getImageType();
    let typeArr = ["png", "svg", "pdf"];

    if (!typeArr.includes(imageType)) {
      throw Error("Error while asking QR-image types!");
    }
    console.log(chalk.blue(`You selected: ${imageType}`));

    let qrFilename = await generateQRCode(url, imageType);
    console.log(chalk.green(`QR Code generated and saved in ${qrFilename}`));

    let f_path = path.resolve("./qrcodes");
    f_path = path.join(f_path, "URL.txt");
    await writeToFile(f_path, url);
    console.log(chalk.green(`URL saved in URL.txt`));
  } catch (err) {
    console.log(chalk.red(err.message));
    process.exit();
  }
}

QRCodeGenerator();
