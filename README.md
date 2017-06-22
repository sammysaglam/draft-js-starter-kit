# draft-js-starter-kit
Starter kit for Draft.js + SASS/SCSS compiler (React included)

**License: MIT**

**Instructions:**
-
   1) "cd" to working directory 
   2) yarn install
   3) commands:
        - yarn build-dev => builds a development version (uses React development environment)
        - yarn build-watch => build and watch for changes (uses React development environment)
        - yarn build => build production version
   4) Open "dist/index.html"
 
**Why use draft-js-starter-kit?**
-
- Includes "Draft.min.css" which compiles into "app.css" alongside your SCSS
- Uses Babel to provide ES6 support
- Includes SASS/SCSS compiler
- Differentiates between development and production environments + minifies on production build
- Includes object spread operator plugin for babel
