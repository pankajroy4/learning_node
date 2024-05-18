// Exporting multiple members 
// ================================
// 1. Using adding to exports as property one by one
// -----------------------------------------------------
function greet(name){
  console.log(`Welocme ${name}!`)
}

const PI = 3.14
let arr = [10,20,30,40,50]


module.exports.greet = greet
module.exports.PI = PI
module.exports.arr = arr
