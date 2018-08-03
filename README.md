# skk-flatten
[![Build Status](https://www.travis-ci.org/softkaikai/skk-flatten.svg?branch=master)](https://www.travis-ci.org/softkaikai/skk-flatten)
[![npm version](https://badge.fury.io/js/skk-flatten.svg)](https://badge.fury.io/js/skk-flatten)<br />
A small module named skk-flatten to flatten a nested array strcuture.
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
