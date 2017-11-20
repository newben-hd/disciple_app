# disciple_app

STRUCTURE
---

* **api**: source codes for back-end API server
* **node_module**: all npm packages 
* **public**: HTML, CSS, and JavaScript as static assets
  * Client side codes
* **sass**: CSS extension files 
* **src**: JavaScript modular codes
  * Back end side codes
  * **components**: Source codes for React components
    * Component per file

IMPORTANT FILES
---

* **./.babelrc**: Configure babel to work with selected presets
* **./.eslintrc.js**:
* **./config.js**: Add important configuration settings to this file
* **./server.js**: First script to run the node server
* **./webpack.config.js**: Configure webpack to work with working directory structure
* **./package.json**: Configure/Make application as a package

PACKAGES
---

* [react]("https://reactjs.org/"): A JS library for building user inferaces
* [react-dom]("https://reactjs.org/docs/react-dom.html"): DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to
* [express]("https://expressjs.com/"): Web framework for node.js
* [axios]("https://github.com/axios/axios"): Promise based HTTP client for the browser and node.js
* [json-loader]("https://github.com/webpack-contrib/json-loader"): Json loader module for webpack
* [prop-types]("https://www.npmjs.com/package/prop-types"): Runtime type checking for React props and similar objects
* [node-sass-middleware]("https://www.npmjs.com/package/node-sass-middleware"): Connect/Express middleware for node-sass

* [babel-cli]("https://www.npmjs.com/package/babel-cli"): Babel command line
* [babel-eslint]("https://github.com/babel/babel-eslint"): ESLint using Babel as the parser
* [babel-loader]("https://github.com/babel/babel-loader"): Webpack plugin for Babel
* [babel-preset-es2015]("https://www.npmjs.com/package/babel-preset-es2015"): Babel preset for all es2015 plugins
* [babel-preset-react]("https://www.npmjs.com/package/babel-preset-react"): Babel preset for all React plugins
* [babel-preset-stage-2]("https://www.npmjs.com/package/babel-preset-stage-2"): Babel preset for stage 2 plugins
* [eslint]("https://eslint.org/"): The pluggable linting utility for JavaScript and JSX
* [eslint-plugin-react]("https://www.npmjs.com/package/eslint-plugin-react"): React specific linting rules for ESLint
* [nodemon]("https://github.com/remy/nodemon"): Monitor for any changes in your node.js application and automatically restart the server - perfect for development
* [webpack]("https://webpack.js.org/"): Static module bundler for modern JavaScript applications
* [url-loader]("https://github.com/webpack-contrib/url-loader"): url loader for webpack
* [file-loader]("https://github.com/webpack-contrib/file-loader"): file loader for webpack