const { addHeaders, addItems, showItems } = require('./helper_functions.js');

const arr_of_items = [
  { name: "Bread", qty: 4, price: 20 },
  { name: "Milk", qty: 2, price: 35 },
  { name: "Butter", qty: 3, price: 250 },
]

const path = "../text_files/groceries.csv"
const headers = ['name', 'qty', 'price']

try{
  addHeaders(path,headers)
  addItems(path, arr_of_items)
  // showItems(path)
}catch(error){
  console.log(error)
}

