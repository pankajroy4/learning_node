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
      let oldPrice = this.itemPrice;
      this.itemPrice = price;
      this.emit("priceChanged", oldPrice);
    }
  }
}

module.exports = Item;
