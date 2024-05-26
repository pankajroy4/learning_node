/* Using exports keyword
----------------------------
  Node.js provides us a shortcut to module.exports and it is called exports.
  It is a keyword that act as a reference to module.exports and is a quick way to export values from a module.
  All it does is populate the nodule.exports object.

  So we can say module.exports and exports refers/pointing to the same object.

*/
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b
}

exports.add = add;
exports.multiply = multiply;
