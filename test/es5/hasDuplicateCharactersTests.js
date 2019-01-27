'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Has Duplicate Characters Algorithm: hasDuplicateCharacters(string)', function () {
  it('Should correctly return true or false depending on whether the input string has duplicate characters', function () {
    expect((0, _es.hasDuplicateCharacters)('dat')).to.eql(false)
    expect((0, _es.hasDuplicateCharacters)('ma')).to.eql(false)
    expect((0, _es.hasDuplicateCharacters)('cat')).to.eql(false)
    expect((0, _es.hasDuplicateCharacters)('hello')).to.eql(true)
    expect((0, _es.hasDuplicateCharacters)('motto')).to.eql(true)
  })
  it('Should return null when no input is provided', function () {
    expect((0, _es.hasDuplicateCharacters)()).to.eql(null)
  })
})
