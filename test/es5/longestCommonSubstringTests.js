'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Longest Common Substring Algorithm: longestCommonSubstring(input1, input2)', function () {
  it('Should return the longest common substring in the input strings when there is at least one common substring', function () {
    expect((0, _es.longestCommonSubstring)('test', 'est')).to.eql('est')
    expect((0, _es.longestCommonSubstring)('tes', 'est')).to.eql('es')
  })
  it('Should return null when there are no common substrings in the input strings', function () {
    expect((0, _es.longestCommonSubstring)('test', 'xyz')).to.eql(null)
  })
  it('Should return null when either input string is unspecified', function () {
    expect((0, _es.longestCommonSubstring)('test')).to.eql(null)
    expect((0, _es.longestCommonSubstring)()).to.eql(null)
  })
})
