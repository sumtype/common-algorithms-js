'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Rabin-Karp String Match Algorithm: rabinKarpStringMatch(input, pattern, check)', function () {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string', function () {
    expect((0, _es.rabinKarpStringMatch)('test', 'test', false)).to.eql(0)
    expect((0, _es.rabinKarpStringMatch)('test', 'est', false)).to.eql(1)
    expect((0, _es.rabinKarpStringMatch)('teststst', 'st', false)).to.eql(2)
    expect((0, _es.rabinKarpStringMatch)('test', 'test', true)).to.eql(0)
    expect((0, _es.rabinKarpStringMatch)('test', 'est', true)).to.eql(1)
    expect((0, _es.rabinKarpStringMatch)('tests', 'est', true)).to.eql(1)
    expect((0, _es.rabinKarpStringMatch)('teststst', 'st', true)).to.eql(2)
  })
  it('Should return null when the given pattern does not exist inside the input string', function () {
    expect((0, _es.rabinKarpStringMatch)('test', 'xyz', true)).to.eql(null)
    expect((0, _es.rabinKarpStringMatch)('test', 'xyz', false)).to.eql(null)
  })
  it('Should return null when the given pattern is longer than the input string', function () {
    expect((0, _es.rabinKarpStringMatch)('test', 'xyzsda', true)).to.eql(null)
    expect((0, _es.rabinKarpStringMatch)('test', 'xyzsda', false)).to.eql(null)
  })
  it('Should return null if either the input string or pattern are not provided', function () {
    expect((0, _es.rabinKarpStringMatch)('test')).to.eql(null)
    expect((0, _es.rabinKarpStringMatch)()).to.eql(null)
  })
})
