const EventEmitter = require("events");

class Item extends EventEmitter {
  constructor(name, price) {
    super();
    this.itemName = name;
    this.itemPrice = price;
  }

  get name() {
    return this.itemName;
  }

  get price() {
    return this.itemPrice;
  }

  set price(price) {
    if (price > this.itemPrice) {
      let percent = (((price - this.itemPrice) * 100) / this.itemPrice).toFixed(
        2
      );
      this.emit("priceChanged", {
        name: this.itemName,
        oldPrice: this.itemPrice,
        newPrice: price,
        increase: percent,
      });
    }
    this.itemPrice = price;
  }
}

module.exports = Item;
