/* Exporting Default Value
----------------------------
  Whenever we have a module that exports just the one thing, it's more common to directly assign it to module.exports
*/

class Circle{
  constructor(radius){
    this.radius = radius
  }
  
  calculateArea(){
    return Math.PI * Math.pow(this.radius, 2)
  }
}

module.exports = Circle
