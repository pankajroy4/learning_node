// We have to use synchronous mode, because if we use callback api, we will trap into callback hell. So if we want to use async mode then we can use promise api.
const fs = require("fs");
let status = true;

function addHeaders(path, arr) {
  const headerString = arr.join(",");
  try {
    fs.writeFileSync(path, headerString);
  } catch (err) {
    console.log("Error in writing the headers: " + err);
    status = false;
  } finally {
    return status;
  }
}

function addItems(path, items) {
  let csvContent = items
    .map((item) => `\n${item.name},${item.qty},${item.price}`)
    .join(" ");
  try {
    fs.appendFileSync(path, csvContent);
  } catch (err) {
    console.log("Error in adding the items: " + err);
    status = false;
  } finally {
    return status;
  }
}

function showItems(path) {
  try {
    const text = fs.readFileSync(path, "utf8");
    console.log("File read successfully!");
    console.log(text);
  } catch (err) {
    console.log("Error in showing items..");
  }
}

let result;
const path = "./text_files/groceries.csv";
const headers = ["name", "qty", "price"];
result = addHeaders(path, headers);
if (result) {
  console.log("headers added successfully!");
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
}
