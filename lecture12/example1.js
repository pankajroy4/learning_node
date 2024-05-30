/* 
Types of npm INSTALL
=======================
When we install a package using npm we can perform two types of installation.
  1.Local installation (Specific to a project) 
    We install pacakge at our project root and these packages will only available to the that project only. This is local installation.
    Local installation means that the npm module gets installed in the directory where we run the command 'npm install package_name' and they are put in the node_modules folder under this directory.

    command: npm install package_name
             npm intall pacakge_name@version_no

  2.Global installation 
    No matter where we execute the installation command, the package will get installed at location where node is stored.
    
    command: npm install -g package_name@version_no
             npm install package_name@version_no -g
             npm install package_name@version_no --global

    On macOs/linux computers, all the global packages will be installed under usr/local/lib/node_modules.

    On windows, the global npm packages are installed under the roaming/ folder

===========================================================

Listing the packages:
-------------------------
1. Local packages:
  To check the locally installed packages with version no, we need to go to the project folder in the terminal and run the command:
          npm list
      or  npm ls 

  Example:
          npm ls
          qrcodegenerator@1.0.0 /home/ubuntu/PP_PROJECT/SCA/learning_node/project4/QRCodeGenerator
          +-- chalk@4.1.2
          +-- inquirer@8.2.4
          +-- qr-image@3.2.0
          `-- validator@13.12.0

   To check the locally installed packages with version no as well as their dependencies, we need to go to the project folder in the terminal and run the command:
          npm list --depth=0
          npm list --depth=1
          npm list --depth=2

          npm ls --depth=0
          npm ls --depth=1
          npm ls --depth=2
    etc.
  Here depth=0, we do not want to list the dependencies.

2. Global packages:
  We just have to add the flag -g or --global for listing global packages.
  Commands:   
          npm list -g
      or  npm ls -g
          npm list --global --depth=0
          npm list -g --depth=1
          npm list -g --depth=2

          npm ls --depth=0 -g
          npm ls -g --depth=1
          npm ls --depth=2 --global
        
====================================================
Updating packages:
----------------------
To update a package we just have to run the command:
  npm update package_name
  npm update -g package_name

====================================================
Removing packages:
----------------------
To delete a package we just have to run the command:
  npm uninstall package_name
  npm uninstall -g package_name

==========================================================
Which we should use, global or local installation?
--------------------------------------------------------
In our code, both the local or global packages are imnported in the same way:
  require("package_name")

In general, all packages should be installed locally.

A package should be installed globally when it provides an executable command that we can run from the CLI/Terminal and it's reused across projects.
Examples:
  nodemon and forever: 
    These two packages have same functionality. nodemon is a tool that helps us to develop Node.js based applications by automatically restarting the node application when the file changes in the directory are detected.

    Now we can execute our node apps using the command:
      nodemon app_name.js
    We will not need to re-execute this command again and again unlike we have to do node app_name.js when we use node as a command to run our app when we make changes in out code.
    
  mocha: used for testing purposes.

*/