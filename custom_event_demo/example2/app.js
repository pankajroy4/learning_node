const Item = require("./Item.js");

const item = new Item("Banana", 200);

item.on("priceChanged", (itemDetail) => {
  console.log(`Item Name: ${itemDetail.name}`);
  console.log(`Old Price: ${itemDetail.oldPrice}`);
  console.log(`New Price: ${itemDetail.newPrice}`);
  console.log(`Price change by percentage: ${itemDetail.increase}%`);
});

item.price = 220;
console.log(`Final price: ${item.price}`);
