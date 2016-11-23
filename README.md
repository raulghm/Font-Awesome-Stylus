Font Awesome Stylus
===================
<p align="left">
  <a href="https://www.npmjs.com/package/font-awesome-stylus"><img src="https://img.shields.io/npm/v/font-awesome-stylus.svg?style=flat-square"></a>
  <a href="http://bower.io/search/?q=font-awesome-stylus"><img src="https://img.shields.io/bower/v/font-awesome-stylus.svg?style=flat-square"></a>
  <a href="https://github.com/raulghm/font-awesome-stylus/stargazers"><img src="http://img.shields.io/npm/dm/font-awesome-stylus.svg?style=flat-square"></a>
</p>


> Stylus Port for Font Awesome

## Installation
Import index.styl in your project and configure fonts path correctly ($fa-font-path)

## Usage

```stylus
// Set font path
$fa-font-path = "../fonts"
// OR
$fa-font-path = "http://netdna.bootstrapcdn.com/font-awesome/4.7.0/fonts"

// Import component
@import "../bower_components/Font-Awesome-Stylus/stylus/index"

// Include icon using mixin
.my-icon
  fa(user)
```

## Bower support
```
bower install font-awesome-stylus
```
## NPM support
```
npm install font-awesome-stylus
```
### Original source
http://fortawesome.github.io/Font-Awesome
