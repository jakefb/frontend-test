2.1. Explain the structure of the tooling.

The code for this project is separated into `src` and `dist` directories. `src` contains the code that the developer works on. This code is compiled into the `dist` directory where it can be run in the browser.

The `src` directory contains: `components` for the React components, `__tests__` for the tests, `index.js` for the top level React component and `scss` for the Sass code which is compiled to CSS.

2.2. Describe the main packages that are used to build the project.

Parcel is used to bundle all the assets for this project into the `dist` directory. Babel is used to compile the JavaScript ES6 code into browser compatible JavaScript.

2.3. What are the main dot files (e.g. `.babelrc`) and what purpose do these serve?

The `package.json` configuration file specifies the tools used to develop, test and build the project. The developer can install these dependencies with a package manager for Node such as npm. Scripts can be added to this file to make it easy for the developer to run these tools.

The `.babelrc` is a configuration file that specifies how Babel should compile the ES6 code so that it can be run in the browser. This project uses the React preset, which consists of the plugins required to compile React code.

The `.nvmrc` configuration file specifies the version of Node that Node Version Manager should use for this project. This ensures that developers use the same version of Node to install and run the code.

The `.eslintrc` configuration file defines the rules that ESLint should use while statically analysing the code for errors and style issues. This project uses the default rules except, no-console and no-unused-vars are set to off. This allows logging to the console and defining variables that are unused.

The `.prettierrc` configuration file specifies that style that Prettier should use to format the code to make the style of the code consistent and readable. This ensures that different developers working on the code use the same style so that it is easier for them to understand.

The `.eslintignore` and `.prettierignore` files specify which files that these programs should ignore when scanning the project for code to analyse.

2.4. Describe the tools used to statically analyse and test the code base. What is each tool's purpose?

ESLint is a JavaScript linter that is used to analyse the code for errors that can lead to bugs. A linter is a program that is run to analyse the syntax of the code without executing it. This means that the code can be checked for mistakes without having to execute each part of the code that could lead to an error. The purpose of this tool is to identify and eliminate errors in the code and ensure the code style is consistent.

Jest is used to run the tests defined in `src/components/__tests__`. The tests use react-testing-library which tests the React components after they are rendered to the DOM. This allows the developer to test how the app will work when the user uses it. Sinon is used to test the functionality of the code and to make sure that it is working correctly.

2.5. Describe how the tools are executed, and what would be a regular set of commands a developer would run.

To run the tools the developer can check the scripts in the package.json file to run with npm. The main ones for this project are:

`npm run-script test` runs ESLint to check the syntax of the code and Jest to run the tests.

`npm run-script test -- --watch` can be added to

`npm run-script start` builds and bundles the code and watches it for changes while the developer is working on it.

`npm run-script format` runs Prettier to format the code so that the style is consistent.

2.6. Bonus: feedback on the tools and structure. What doesn't make sense? What would you change?

I think the tools and structure works well for this project. I would like to learn more about ways of using Jest, Sinon and react-testing-library to test the code.
