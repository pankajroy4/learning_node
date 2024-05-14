function greet(name){
  console.log(`Welocme ${name}!`)
}

module.exports.greet = greet

/*
NOTE:
 when we import this module, we will get all the things which is inside exports. 

 Here , greet is a property of exports.
 exports is an object and insde that object we have a key greet,so when we import this module we will get {greet: ...}


 *Note: VVI
 module.exports.greet = greet

 Here we assing a key to exports and to that key we assing the greet() function.
 We do not assign the greet() function to the exports. 

 When we do:
  module.exports = greet
  then we assing the greet() function to exports object.
  We will do this later.
  In node this is called default export.

 ---------------------------------

 We can also export an object:
 let my_obj = {name: "Ram", age: 23}

 module.exports.person = my_obj

 when we import it, we will get an object with a key 'person' and that key has my_obj object as value.

 ex: 
  let some = require("./file_name")
  console.log(some.person.name)  # "Ram"
  console.log(some.person.age)   # 23
 */