'use strict';

var isObject = require('is-extendable');
var extend = require('extend-shallow');
var get = require('get-value');
var set = require('set-value');

module.exports = function assignValue(obj, prop, value) {
  if (!isObject(obj)) {
    throw new TypeError('assign-value expects the first argument to be an object.');
  }

  if (typeof prop === 'undefined' && typeof value === 'undefined') {
    return obj;
  }

  if (typeof value === 'undefined' && isObject(prop)) {
    return extend(obj, prop);
  }

  set(obj, prop, extend({}, get(obj, prop), value));
  return obj;
};
