const fsPromises = require("fs/promises");

async function writeToFile(filePath, url) {
  try {
    const data = url + "\n";
    await fsPromises.appendFile(filePath, data);
  } catch (err) {
    throw Error(`Error in writing URL to text file: ${err.message}`);
  }
}

module.exports = writeToFile;