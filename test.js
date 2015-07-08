'use strict';

/* deps: mocha */
var assert = require('assert');
var should = require('should');
var assign = require('./');

describe('assign', function () {
  it('should extend a value:', function () {
    var obj = {};
    assign(obj, {a: 'b'})
    obj.should.eql({a: 'b'});
  });

  it('should assign a nested value:', function () {
    var obj = {};
    assign(obj, 'foo', {a: 'b'})
    obj.foo.should.eql({a: 'b'});
  });

  it('should extend an existing value:', function () {
    var obj = {foo: {a: 'b'}};
    assign(obj, 'foo', {c: 'd'})
    obj.foo.should.eql({a: 'b', c: 'd'});
  });

  it('should assign a deeply nested value:', function () {
    var obj = {};
    assign(obj, 'a.b.c', {one: 'two'});
    assign(obj, 'a.b.c', {three: 'four'});
    obj.a.b.c.should.eql({one: 'two', three: 'four'});
  });

  it('should throw an error:', function () {
    (function () {
      assign();
    }).should.throw('assign-value expects the first argument to be an object.');
  });
});
