// We have to use synchronous mode, because if we use callback api, we will trap into callback hell
const fs = require('fs')
let status = true;

function addHeaders(path, arr) {
  const headerString = arr.join(','); 
  try{
    fs.writeFileSync(path, headerString)
  }catch(err){
    console.log("Error in writing the headers: " + err)
    status = false;
  }
  finally{
    return status
  }
  
}

function addItems(path, arr) {
  let csvContent = arr.map(item => `\n${item.name},${item.qty},${item.price}`).join(' ');
  try{
    fs.appendFileSync(path, csvContent)
  }catch(err){
    console.log("Error in adding the items: " + err)
    status = false;
  }
  finally{
    return status
  }
}

function showItems(path){
  try{
    const text= fs.readFileSync(path, 'utf8')
    console.log("File read successfully!")
    console.log(text)
  }catch(err){
    console.log("Error in showing items..")
  }
}

module.exports = {
  addHeaders,
  addItems,
  showItems
};
