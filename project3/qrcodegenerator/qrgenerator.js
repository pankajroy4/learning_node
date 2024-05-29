import inquirer from "inquirer";
import chalk from "chalk";
import validator from "validator";
import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import qr from "qr-image";

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
    throw Error(`Error in inputting url: ${err.message}`);
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
    throw Error(`Error in inputting image type: ${err.message}`);
  }
}

function extractWebsiteName(url) {
  let domainName = "";
  let wwwIndex = url.indexOf("www");
  if(wwwIndex == -1){
    let dwFwIndex = url.indexOf("//")
    if(dwFwIndex == -1){
      dwFwIndex = 0;
    }
    else{
      dwFwIndex += 2;
    }
    domainName = url.substring(dwFwIndex, url.indexOf("."))
  }else{
    let secondDot = url.indexOf(".", wwwIndex + 4)
    domainName = url.substring(wwwIndex + 4, secondDot)
  }
  return domainName;
}

async function writeToFile(filePath, url) {
  try {
    const data = url + "\n";
    await fsPromises.appendFile(filePath, data);
  } catch (err) {
    throw Error(`Error in writing URL to text file: ${err.message}`);
  }
}

async function generateQRCode(url, imageType) {
  try {
    let QRImageName = extractWebsiteName(url);
    QRImageName = `${QRImageName}_img.${imageType}`;

    let qrPath = path.resolve("./qrcodes");
    let filePath = path.join(qrPath, QRImageName);

    if(!fs.existsSync(qrPath)){
      await fsPromises.mkdir(qrPath, { recursive: true });
    }
    let qrImg = qr.image(url, { type: imageType });
    let wrStream = fs.createWriteStream(filePath); //returns image buffer i.e stream object
    qrImg.pipe(wrStream);

    return QRImageName;
  } catch (err) {
    throw Error(`Error in generating QR-code: ${err.message}`);
  }
}

async function doTask() {
  try {
    let url = await getUrl();
    console.log(chalk.blue(`you typed: ${url}`));
    if (!validator.isURL(url)) {
      throw Error("It is an invalid url!");
    }
    console.log(chalk.green("It is a valid URL!"));

    let imageType = await getImageType();
    let typeArr = ["png", "svg", "pdf"];

    if (!typeArr.includes(imageType)) {
      throw Error("Invalid QR-image types!");
    }
    console.log(chalk.blue(`You selected: ${imageType}`));

    let qrFilename = await generateQRCode(url, imageType);
    if(qrFilename == ""){
      throw Error("Could not generate QR code")
    }
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

doTask();


/*
NOTE:
In this project we use:
    let wrStream = fs.createWriteStream(filePath); //returns image buffer

    This methods generate exceptions based on certain events.

    This line may raise exception in many cases which is beyond to our control. It may raise exception when disk is locked, writing permission is denied, passed wrong path etc.
    
    So in these cases cause exception.
    We can not handle such stream exception using try-catch.
    To handle these types of exceptions , some concepts like event handling is used which we will learn later.
    
*/