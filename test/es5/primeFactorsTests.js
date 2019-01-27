'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Prime Factors Algorithm: primeFactors(number)', function () {
  it('Should return the prime factors of the given integer', function () {
    expect((0, _es.primeFactors)(18).toString()).to.eql([2, 3, 3].toString())
    expect((0, _es.primeFactors)(600851475143).toString()).to.eql([71, 839, 1471, 6857].toString())
  })
  it('Should return null if no input integer is provided', function () {
    expect((0, _es.primeFactors)()).to.eql(null)
  })
})
