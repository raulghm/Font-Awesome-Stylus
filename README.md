Font Awesome Stylus
===================
<p align="left">
  <a href="https://www.npmjs.com/package/font-awesome-stylus"><img src="https://img.shields.io/npm/v/font-awesome-stylus.svg?style=flat-square"></a>
  <a href="http://bower.io/search/?q=font-awesome-stylus"><img src="https://img.shields.io/bower/v/font-awesome-stylus.svg?style=flat-square"></a>
  <a href="https://github.com/raulghm/font-awesome-stylus/stargazers"><img src="http://img.shields.io/npm/dm/font-awesome-stylus.svg?style=flat-square"></a>
</p>


> Stylus Port for Font Awesome

## Installation
Import font-awesome in your project and configure fonts path correctly ($fa-font-path)

## Bower support
```
bower install font-awesome-stylus
```
## NPM support
```
npm install font-awesome-stylus
```

## Usage
Set font path
```stylus
$fa-font-path = "../fonts"
// OR
$fa-font-path = "http://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts"
```

Example of requiring and using font-awesome middleware to create compile function to utilize in other frameworks.
```javascript
var fontAwesome = require('font-awesome-stylus'),
    stylus      = require('stylus');

function compile(str) {
  return stylus(str)
    .use(fontAwesome());
}
```

To import whole font-awesome in your stylus file:
```stylus
@import "font-awesome-stylus"
```

Include icon using mixin
```
.my-icon
  fa(user)
```

### Original source
http://fortawesome.github.io/Font-Awesome
