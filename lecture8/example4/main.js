/* Importing only specific property
===================================
Till now we imported the wole module, but node allow us to import only specific members.
We can do this in two ways:
*/
  // 1.Using javascript's destructuring feature

    // const  {greet} = require("./welcome.js")
    // greet("Pankaj")

  // 2.Using dot (.) operator

    const  greet = require("./welcome.js").greet
    greet("Pankaj") 