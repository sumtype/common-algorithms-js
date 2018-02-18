'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es5')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Rabin-Karp String Match ES5 Algorithm: rabinKarpStringMatch(input, pattern, check)', function () {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', function () {
    expect((0, _es.rabinKarpStringMatch)('test', 'test', false)).to.eql(0)
    expect((0, _es.rabinKarpStringMatch)('test', 'est', false)).to.eql(1)
    expect((0, _es.rabinKarpStringMatch)('teststst', 'st', false)).to.eql(2)
    expect((0, _es.rabinKarpStringMatch)('test', 'test', true)).to.eql(0)
    expect((0, _es.rabinKarpStringMatch)('test', 'est', true)).to.eql(1)
    expect((0, _es.rabinKarpStringMatch)('teststst', 'st', true)).to.eql(2)
  })
  it('Should return -1 when the given pattern does not exist inside the input string.', function () {
    expect((0, _es.rabinKarpStringMatch)('test', 'xyz', true)).to.eql(-1)
    expect((0, _es.rabinKarpStringMatch)('test', 'xyz', false)).to.eql(-1)
  })
  it('Should return -1 when the given pattern is longer than the input string.', function () {
    expect((0, _es.rabinKarpStringMatch)('test', 'xyzsda', true)).to.eql(-1)
    expect((0, _es.rabinKarpStringMatch)('test', 'xyzsda', false)).to.eql(-1)
  })
})
