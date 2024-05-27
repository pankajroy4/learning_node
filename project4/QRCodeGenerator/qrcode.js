const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const qr = require("qr-image");

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

module.exports = generateQRCode;