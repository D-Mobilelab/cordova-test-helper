# ES6 Boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/D-Mobilelab/cordova-test-helper.svg)](https://greenkeeper.io/)

Just change the name of the library in the package.json. That's it. 
The package name variable will be the entry point for the library in browser case. 
You can change this behaviour here tools/webpack.config.base.js the library field.
Develop and enjoy.

### Write a library in ES6

-   webpack for bundling, exporting in UMD (with the name of the package in browser case), support for process.env in source code
-   babel, of course
-   eslint (airbnb + valid-jsdoc)
-   jasmine for test with mocha reporter
-   documentation automagically generated

### Commands

-   git clone <this repo> && rm .git && git init
-   npm run build // generate dist/&lt;package.name>.js, dist/&lt;package.name>.min.js, dist/&lt;package.name>.min.js.map 
-   npm run test
-   npm run test:watch    // run tests while typing
-   npm run documentation // generate docs folder with .html, append docs to the readme.md

### Release a new version

-   npm version patch|minor|major
    This will generate the docs/<version> and dist/<version>
    so you can have the build version committed for that tag

# API
