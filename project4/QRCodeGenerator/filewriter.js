const fsPromises = require("fs/promises");

async function writeToFile(filePath, url) {
  try {
    const data = url + "\n";
    await fsPromises.appendFile(filePath, data);
  } catch (err) {
    throw Error(err);
  }
}

module.exports = writeToFile;