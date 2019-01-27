'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Levenshtein Distance Algorithm: levenshteinDistance(input1, input2)', function () {
  it('Should return the levenshtein distance between the input strings', function () {
    expect((0, _es.levenshteinDistance)('test', '')).to.eql(4)
    expect((0, _es.levenshteinDistance)('tex', 'esr')).to.eql(3)
    expect((0, _es.levenshteinDistance)('text', 'rext')).to.eql(1)
    expect((0, _es.levenshteinDistance)('', 'rext')).to.eql(4)
  })
  it('Should return null if either string input is not specified', function () {
    expect((0, _es.levenshteinDistance)()).to.eql(null)
    expect((0, _es.levenshteinDistance)('')).to.eql(null)
  })
})
