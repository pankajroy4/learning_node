/* 
What is semantic versioning.
----------------------------
in short it is also called semVer.
SemVer is a polular versioning scheme that us used by a vast amount of open source projects to communicate the changes included in a version release.
A semantic version has three numbers and starting from right most they are called patch version, Minor version and Major version.

When we look in package.josn file, we can see something like this:

{
  .....
  .....
  "dependencies": {
    ......
    "chalk": "^5.2.3"
    .....
    "qr-image": "~3.6.9"
    ......
  }
}

Here what is the meaning of ^, ~ , 5, 2 and 3.
-----------------------------------------------
Here:
    3 : called "Patch verion". it includes bux fixes/documentation spelling mistake etc. It do not break existing versions of the packages.

    2 : called "Minor version". It includes additions of new functions or API which does not break anything from the older version so anything that runs on v1.1.0 should work on v1.9.0 as well.

    5 : called "Major version". It includes version which breaks stuff. It van include removing APIs or changing names of functions so anything that works on v1.0.0 may not necessarilly work on v2.0.0

    ^ : It is called 'Caret'. A ^ sign before the version tells npm that if someone clones the project and runs npm install in th directory then install the latest minor verion/patch version of the package in his node_modules.

    Caret ^ tells npm that if a minor/patch verion in updated then install that latest module with latest minor/patch verion.
    But if major version has some update then do not install the package.

    Note: Sometime we may see:
          "chalk": "5.x"
        This is same as writing "chalk": "^5.2.8"
    So we can say, Caret fix the major version and leaves minor/patch verison floating.

    ~ : It is called "tild". It tells npm to install the modules only when there is no latest verison in major and minor. If latest patch version available then install it.
    
    So tild fix major and minor version and leaves patch version floating.

  What if we remove both ~ and ^:
  -------------------------------
  Like "chalk": "5.2.8". It fix all the version. Means No matter what latest version is availabe , it will install 5.2.8

*/