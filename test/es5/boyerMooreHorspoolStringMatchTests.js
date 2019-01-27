'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Boyer-Moore-Horspool String Match Algorithm: boyerMooreHorspoolStringMatch(input, pattern, alphabetSize)', function () {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string', function () {
    expect((0, _es.boyerMooreHorspoolStringMatch)('test', 'test')).to.eql(0)
    expect((0, _es.boyerMooreHorspoolStringMatch)('test', 'est')).to.eql(1)
    expect((0, _es.boyerMooreHorspoolStringMatch)('teststst', 'st')).to.eql(2)
    expect((0, _es.boyerMooreHorspoolStringMatch)('teststst', 't')).to.eql(0)
    expect((0, _es.boyerMooreHorspoolStringMatch)('teststst', 't', 256)).to.eql(0)
  })
  it('Should return null when the given pattern does not exist inside the input string', function () {
    expect((0, _es.boyerMooreHorspoolStringMatch)('test', 'xyz')).to.eql(null)
    expect((0, _es.boyerMooreHorspoolStringMatch)('teststst')).to.eql(null)
    expect((0, _es.boyerMooreHorspoolStringMatch)('t', '')).to.eql(null)
    expect((0, _es.boyerMooreHorspoolStringMatch)()).to.eql(null)
  })
  it('Should return null when the given pattern is longer than the input string', function () {
    expect((0, _es.boyerMooreHorspoolStringMatch)('test', 'xyzsda')).to.eql(null)
  })
})
