'use strict';

/**
 * Lazily required module dependencies
 */

var lazy = require('lazy-cache')(require);
var fn = require;

require = lazy;
require('is-extendable', 'isObject');
require('extend-shallow', 'extend');
require('get-value', 'get');
require('set-value', 'set');
require = fn;

/**
 * Expose `lazy` modules
 */

module.exports = lazy;
