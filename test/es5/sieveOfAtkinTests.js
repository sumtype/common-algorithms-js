'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Sieve of Atkin Algorithm: sieveOfAtkin(n)', function () {
  it('Should return the primes up to the specified integer input', function () {
    expect((0, _es.sieveOfAtkin)(0).toString()).to.eql([].toString())
    expect((0, _es.sieveOfAtkin)(1).toString()).to.eql([].toString())
    expect((0, _es.sieveOfAtkin)(2).toString()).to.eql([2].toString())
    expect((0, _es.sieveOfAtkin)(3).toString()).to.eql([2, 3].toString())
    expect((0, _es.sieveOfAtkin)(100).toString()).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString())
    expect((0, _es.sieveOfAtkin)().toString()).to.eql([].toString())
  })
})
