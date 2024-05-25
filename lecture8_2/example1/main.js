/*
3.Third party module:
=============================
Package Manager:
  A packaage manager is a programming language's tool to create projecct environments and easily imports all the externaal depenndencies.
  It automatees the finding, downloading, installing, configuring, upgrading and removing of all the libraries for an application.

  It also allows us to "package" our project aand publish it for others.
  Popular language and its package manager.
  Python       ->  pip, conda
  Java         ->  maven, gradle, ant
  php          ->  composer
  JavaScript   ->  npm, yarn
  Ruby         ->  rubygems

  npm : It plays double role. It is a package manager and it is also a online repository. 
  npm is a package manager, means it is a cli(command line interface) tool for publishing and downloading packages.

  For uploading our package:
    command :   npm publish ...
  For downloading packages from npm repo:
    command :   npm install ...
    
  All the packages or modules we get using npm are third party modules.

  How to install NPM module:
    * create a application folder.
    * Migrate intot that folder in terminal.
    * Run the command: npm init 
            which will create a package.json file in the app.
            In this package.json file top level-dependencies are stored. Whenever we install a module it will automatically get updated.
    * When we will run the command npm init, it will ask some question , answer it or simply press enter.
    * This file help when we host our project to remote repo and when someone downolad this repo and just run npm install then this all architecture from package.json file will be created.
 
    Now we can install any package in our app.
    eg:
      npm intall validator 
    It will create a folder 'node_modules' where this validator package will be stored And it also creates a file called 'package_lock.json' where meta-data is stored, means it store top-lavel dependencies along with its own dependencies. Top-level means, it may happens that these dependencies itself may  depends on some other dependecies. So it stores dependencies of dependencies.

Note: 
    We can directly run the command:
      npm install module_name
    It will automatically creates the file which is created by the command npm init. So we can skip the command npm init. However this is not recomended

*/  