// Exporting multiple members 
// ================================
// 2. Using object and assign it to exports
// -----------------------------------------------------
function greet(name){
  console.log(`Welocme ${name}!`)
}

const PI = 3.14
let arr = [10,20,30,40,50]


module.exports = {greetings: greet, mPI: PI, mArr: arr}
