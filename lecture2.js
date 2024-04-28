// Learning about modules and require
// ==================================================

let util = require('util');
let name = "Mohan";
let age = 25;

let msg = util.format("Name is %s, age is %d", name, age)
console.log(msg)
let options = { colors: true }
let msg2 = util.inspect(msg, options)
console.log(msg2)

// ==================================================
// The fs module : file system module 
// ==================================================
/*
From node v-10, three types of APIs to interact with files :
  1. synchronous
  2. callback
  3. promise (Latest)
*/
