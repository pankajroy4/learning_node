/*
Local modules in Node.js
=========================
  as we know there are two type of module system in node.js
  And 
  As we know there are three types of modules in node.js
    1. Core modules
    2. local modules
    3. Third-party modules

Local Modules
====================
Local modules are those modules which are created by the developer and are not pre-built in Node.JS
Any .js file is a module.

To use a local module we need to two steps:
  * Create and export module
  * Import that module and use it in other file as per  the requirements.
  
  # How do we export a module:
  ----------------------------
  Whenever we create a .js file, a special object called 'module' has made available to each .js file by node.js.
  This 'module' has many properties along with 'exports'.

  console.log(module)
  output:   Module {
                    id: '.',
                    path: '/home/ubuntu/PP_PROJECT/SCA/learning_node/promise_fs',
                    exports: {},
                    filename: '/home/ubuntu/PP_PROJECT/SCA/learning_node/promise_fs/lecture7_2.js',
                    loaded: false,
                    children: [],
                    paths: [
                      '/home/ubuntu/PP_PROJECT/SCA/learning_node/promise_fs/node_modules',
                      '/home/ubuntu/PP_PROJECT/SCA/learning_node/node_modules',
                      '/home/ubuntu/PP_PROJECT/SCA/node_modules',
                      '/home/ubuntu/PP_PROJECT/node_modules',
                      '/home/ubuntu/node_modules',
                      '/home/node_modules',
                      '/node_modules'
                    ]
              } 

  As we can see,'exports' it self is an object.
  The module object contains all of the variables, objects, and functions from our current module that we want to export.
  Also, we can add other(current module) objects to it that we want to be available to other files.
  So we can use the 'exports' property of module object of the file to export that file/file contents.
              
  we can assign anything to 'exports':
  eg:
    console.log("Before adding to exports:" + module.exports)
    let msg = "Hello"
    let num = 25

    module.exports.message = msg;
    module.exports.number = num;

    console.log("After adding to exports:" + module.exports)

    output: Before adding to exports: {}
            After adding to exports: { message: 'Hello', number: 25 }

*/
