'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es5')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Brute Force String Match ES5 Algorithm: bruteForceStringMatch(input, pattern)', function () {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', function () {
    expect((0, _es.bruteForceStringMatch)('test', 'est')).to.eql(1)
  })
  it('Should return -1 when the given pattern does not exist inside the input string.', function () {
    expect((0, _es.bruteForceStringMatch)('test', 'xyz')).to.eql(-1)
  })
  it('Should return -1 when the given pattern is longer than the input string.', function () {
    expect((0, _es.bruteForceStringMatch)('test', 'xyzsda')).to.eql(-1)
  })
})
