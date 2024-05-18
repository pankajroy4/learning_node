// Exporting multiple members 
// ================================
// 3. If we want to export the module members with the same name as they have been defined then we can simply assign their names to module.exports as initializers.
// -----------------------------------------------------
function greet(name){
  console.log(`Welocme ${name}!`)
}

const PI = 3.14
let arr = [10,20,30,40,50]


module.exports = {greet, PI, arr}
