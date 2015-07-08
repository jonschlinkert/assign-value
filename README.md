# assign-value [![NPM version](https://badge.fury.io/js/assign-value.svg)](http://badge.fury.io/js/assign-value)

> Extend a value or deeply nested property of an object using object path notation.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i assign-value --save
```

## Usage

```js
var assign = require('assign-value');

var obj = {};
assign(obj, 'foo', {a: 'b'})
// obj.foo ==> {a: 'b'}

var obj = {foo: {a: 'b'}};
assign(obj, 'foo', {c: 'd'})
// obj.foo ==> {a: 'b', c: 'd'}

var obj = {};
assign(obj, 'a.b.c', {one: 'two'});
assign(obj, 'a.b.c', {three: 'four'});
// obj.a.b.c ==> {one: 'two', three: 'four'}
```

## Related projects

* [get-value](https://github.com/jonschlinkert/get-value): Use property paths (`  a.b.c`) to get a nested value from an object.
* [has-value](https://github.com/jonschlinkert/has-value): Returns true if a value exists, false if empty. Works with deeply nested values using… [more](https://github.com/jonschlinkert/has-value)
* [set-value](https://github.com/jonschlinkert/set-value): Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths.
* [union-value](https://github.com/jonschlinkert/union-value): Set an array of unique values as the property of an object. Supports setting deeply… [more](https://github.com/jonschlinkert/union-value)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/assign-value/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on July 08, 2015._