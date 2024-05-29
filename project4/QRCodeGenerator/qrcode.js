const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const qr = require("qr-image");

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
    let wrStream = fs.createWriteStream(filePath);
    qrImg.pipe(wrStream);

    return QRImageName;
  } catch (err) {
    throw Error(`Error in generating QR-code: ${err.message}`);
  }
}

module.exports = generateQRCode;