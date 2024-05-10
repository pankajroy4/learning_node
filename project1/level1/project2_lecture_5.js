const fs = require("fs");
let status = true;

function addItems(path, items) {
  try {
    let json_str = JSON.stringify(items);
    fs.writeFileSync(path, json_str);
  } catch (err) {
    console.log("Error in adding the items: " + err);
    status = false;
  } finally {
    return status;
  }
}

function showItems(path) {
  try {
    const json_str = fs.readFileSync(path, "utf-8");
    console.log("File read successfully!");
    const itemsArr = JSON.parse(json_str)

    let total_bill = 0
    itemsArr.forEach((item)=>{
      console.log(`name: ${item.name}, Quantity: ${item.qty}, Price: ${item.price}`);
      total_bill += item.qty * item.price
    })
    console.log("Final Bill: " + total_bill);
  } catch (err) {
    console.log("Error in showing items..");
  }
}

let result;
const path = "./text_files/groceries.json";

const arr_of_items = [
  { name: "Bread", qty: 4, price: 20 },
  { name: "Milk", qty: 2, price: 35 },
  { name: "Butter", qty: 3, price: 250 },
];

result = addItems(path, arr_of_items);
if (result) {
  console.log("Items added successfully!");
  showItems(path);
}
