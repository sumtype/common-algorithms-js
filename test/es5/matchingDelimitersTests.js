'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Matching Delimiters Algorithm: matchingDelimiters(string, mapping)', function () {
  it('Should correctly return whether the string has matching opening and closing delimiters based on the mapping', function () {
    expect((0, _es.matchingDelimiters)('[]{}', { '[': ']', '{': '}' })).to.eql(true)
    expect((0, _es.matchingDelimiters)('[]{}')).to.eql(true)
    expect((0, _es.matchingDelimiters)('[]{')).to.eql(false)
    expect((0, _es.matchingDelimiters)('[[]]{]}')).to.eql(false)
    expect((0, _es.matchingDelimiters)('[{}', { '[': ']' })).to.eql(false)
    expect((0, _es.matchingDelimiters)('[{}', { '[': '}' })).to.eql(true)
    expect((0, _es.matchingDelimiters)('b[{}aa', { 'b': 'a' })).to.eql(false)
    expect((0, _es.matchingDelimiters)('b[{}a', { 'b': 'a' })).to.eql(true)
  })
  it('Should return null if the input string is unspecified', function () {
    expect((0, _es.matchingDelimiters)()).to.eql(null)
  })
})
