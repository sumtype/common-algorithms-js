'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _v = require('uuid/v4')

var _v2 = _interopRequireDefault(_v)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Knuth-Morris-Pratt String Match Algorithm: knuthMorrisPrattStringMatch(input, pattern)', function () {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string', function () {
    for (var i = 0; i < 10000; i++) {
      var string = (0, _v2.default)()
      var index = Math.floor(Math.random() * (string.length / 2))
      var pattern = string.substr(index, Math.floor(Math.random() * string.length + 2))
      expect((0, _es.knuthMorrisPrattStringMatch)(string, pattern)).to.eql(string.indexOf(pattern))
    }
  })
  it('Should return null when the given pattern does not exist inside the input string', function () {
    expect((0, _es.knuthMorrisPrattStringMatch)('test', 'xyz')).to.eql(null)
  })
  it('Should return null when the given pattern is longer than the input string', function () {
    expect((0, _es.knuthMorrisPrattStringMatch)('test', 'xyzsda')).to.eql(null)
  })
  it('Should return null when there is no input string or input pattern', function () {
    expect((0, _es.knuthMorrisPrattStringMatch)('test')).to.eql(null)
    expect((0, _es.knuthMorrisPrattStringMatch)()).to.eql(null)
  })
})
