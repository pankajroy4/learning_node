const fs = require('fs')

function addHeaders(path, arr) {
  const headerString = arr.join(','); 
  fs.writeFile(path, headerString, (error)=>{
    if(error){
      throw error
    }
    else 
      console.log("Headers added successfully!")
  })
}

function addItems(path, arr) {
  let csvContent = arr.map(item => `${item.name},${item.qty},${item.price}`).join(',');
  console.log(csvContent)
  fs.appendFile(path, csvContent, (err) => {
    if (err) {
      throw err
    } else {
      console.log("Items added to file successfully.");
    }
  });
}

function showItems(path){

}


module.exports = {
  addHeaders,
  addItems,
  showItems
};
