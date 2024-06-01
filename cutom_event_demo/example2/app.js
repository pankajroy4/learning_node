const Item = require("./Item.js");

const item = new Item("Banana", 200);

item.on("priceChanged", (oldPrice) => {
  console.log(`Item: ${item.name}`);
  console.log(`Old Price: ${oldPrice}`);
  console.log(`New Price: ${item.price}`);
  console.log(
    `Price change by percentage: ${((item.price - oldPrice) / 100) * 100}%`
  );
});

item.price = 220;
