'use strict';

var utils = require('./utils');

module.exports = function assign(obj, prop, value) {
  if (!utils.isObject(obj)) {
    throw new TypeError('expected the first argument to be an object.');
  }

  if (typeof prop === 'undefined' && typeof value === 'undefined') {
    return obj;
  }

  if (typeof value === 'undefined' && utils.isObject(prop)) {
    return utils.extend(obj, prop);
  }

  if (typeof value === 'string') {
    utils.set(obj, prop, value);
    return obj;
  }

  var current = utils.get(obj, prop);
  var val = utils.extend({}, current, value);
  utils.set(obj, prop, val);
  return obj;
};
