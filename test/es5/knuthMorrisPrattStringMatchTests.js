'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es5')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Knuth-Morris-Pratt String Match ES5 Algorithm: knuthMorrisPrattStringMatch(input, pattern)', function () {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', function () {
    expect((0, _es.knuthMorrisPrattStringMatch)('test', 'est')).to.eql(1)
    expect((0, _es.knuthMorrisPrattStringMatch)('tafsesrt', 'esrt')).to.eql(4)
    expect((0, _es.knuthMorrisPrattStringMatch)('testtest', 'stt')).to.eql(2)
    expect((0, _es.knuthMorrisPrattStringMatch)('testtest', 'test')).to.eql(0)
    expect((0, _es.knuthMorrisPrattStringMatch)('testtest', 'ttest')).to.eql(3)
  })
  it('Should return null when the given pattern does not exist inside the input string.', function () {
    expect((0, _es.knuthMorrisPrattStringMatch)('test', 'xyz')).to.eql(null)
  })
  it('Should return null when the given pattern is longer than the input string.', function () {
    expect((0, _es.knuthMorrisPrattStringMatch)('test', 'xyzsda')).to.eql(null)
  })
  it('Should return null when there is no input string or input pattern.', function () {
    expect((0, _es.knuthMorrisPrattStringMatch)('test')).to.eql(null)
    expect((0, _es.knuthMorrisPrattStringMatch)()).to.eql(null)
  })
})
