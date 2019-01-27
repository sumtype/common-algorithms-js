'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Boyer-Moore String Match Algorithm: boyerMooreStringMatch(input, pattern)', function () {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string', function () {
    expect((0, _es.boyerMooreStringMatch)('test', 'test')).to.eql(0)
    expect((0, _es.boyerMooreStringMatch)('test', 'est')).to.eql(1)
    expect((0, _es.boyerMooreStringMatch)('teststst', 'st')).to.eql(2)
  })
  it('Should return null when the given pattern does not exist inside the input string', function () {
    expect((0, _es.boyerMooreStringMatch)('test', 'xyz')).to.eql(null)
    expect((0, _es.boyerMooreStringMatch)('test')).to.eql(null)
    expect((0, _es.boyerMooreStringMatch)()).to.eql(null)
  })
  it('Should return null when the given pattern is longer than the input string', function () {
    expect((0, _es.boyerMooreStringMatch)('test', 'xyzsda')).to.eql(null)
  })
})
