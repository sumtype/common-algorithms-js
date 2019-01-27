'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Damerau-Levenshtein Distance Algorithm: damerauLevenshteinDistance(input1, input2)', function () {
  it('Should return the Damerau-Levenshtein distance between the input strings', function () {
    expect((0, _es.damerauLevenshteinDistance)('test', '')).to.eql(4)
    expect((0, _es.damerauLevenshteinDistance)('tex', 'esr')).to.eql(3)
    expect((0, _es.damerauLevenshteinDistance)('text', 'rext')).to.eql(1)
    expect((0, _es.damerauLevenshteinDistance)('ca', 'abc')).to.eql(2)
    expect((0, _es.damerauLevenshteinDistance)('', 'abc')).to.eql(3)
    expect((0, _es.damerauLevenshteinDistance)('')).to.eql(0)
    expect((0, _es.damerauLevenshteinDistance)()).to.eql(0)
  })
})
