const { addHeaders, addItems, showItems } = require('./helper_functions.js');

const arr_of_items = [
  { name: "Bread", qty: 4, price: 20 },
  { name: "Milk", qty: 2, price: 35 },
  { name: "Butter", qty: 3, price: 250 },
]

const path = "./text_files/groceries.csv"
const headers = ['name', 'qty', 'price']
let result;
result = addHeaders(path,headers);
if (result){
  console.log("headers added successfully!")
  result = addItems(path, arr_of_items)
  if(result){
    console.log("Items added successfully!")
    showItems(path)
  }
  else{
    console.log("Cancelling showing items")
  }
}else{
  console.log("Cancelling adding items and showing items")
}