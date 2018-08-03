# skk-shuffle
[![Build Status](https://www.travis-ci.org/softkaikai/skk-flatten.svg?branch=master)](https://www.travis-ci.org/softkaikai/skk-flatten)
[![npm version](https://badge.fury.io/js/skk-flatten.svg)](https://badge.fury.io/js/skk-flatten)<br />
A small module named skk-shuffle to shuffle a array. You can determine to change the source arr or return a new array by pass true as the second argument.
## Example
install
``` javascript
  npm install --save skk-flatten
```
usage
``` javascript
  var flatten = require('skk-flatten');

  var arr = [1,2,[3,4,[5,6]], 7,8]

  var flattenArr = flatten(arr) // [1,2,3,4,5,6,7,8]

```
