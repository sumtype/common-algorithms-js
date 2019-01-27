'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Longest Common Subsequence Algorithm: longestCommonSubsequence(input1, input2)', function () {
  it('Should return the Longest Common Subsequence in the input strings when there is at least one common character', function () {
    expect((0, _es.longestCommonSubsequence)('test', 'es')).to.eql('es')
    expect((0, _es.longestCommonSubsequence)('tex', 'esr')).to.eql('e')
  })
  it('Should return null when there are no common substrings in the input strings', function () {
    expect((0, _es.longestCommonSubsequence)('test', 'xyz')).to.eql(null)
  })
  it('Should return null when either input string is not specified', function () {
    expect((0, _es.longestCommonSubsequence)('test')).to.eql(null)
    expect((0, _es.longestCommonSubsequence)()).to.eql(null)
  })
})
