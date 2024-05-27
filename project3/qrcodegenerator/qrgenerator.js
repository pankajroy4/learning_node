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

function extractWebsiteName(url) {
  if (url.startsWith("http://")) {
    url = url.slice(7);
  } else if (url.startsWith("https://")) {
    url = url.slice(8);
  }

  if (url.startsWith("www.")) {
    url = url.slice(4);
  }

  let domainName = url.split(".")[0];

  return domainName;
}

async function writeToFile(filePath, url) {
  try {
    const data = url + "\n";
    await fsPromises.appendFile(filePath, data);
  } catch (err) {
    throw Error(err);
  }
}

async function generateQRCode(url, imageType) {
  try {
    let QRImageName = extractWebsiteName(url);
    QRImageName = `${QRImageName}_img.${imageType}`;

    let qrPath = path.resolve("./qrcodes");
    let filePath = path.join(qrPath, QRImageName);

    await fsPromises.mkdir(qrPath, { recursive: true });
    let qrImg = qr.image(url, { type: imageType });
    qrImg.pipe(fs.createWriteStream(filePath));

    return QRImageName;
  } catch (err) {
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
    console.log(chalk.green("It is a valid URL!"));

    let imageType = await getImageType();
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

doTask();
