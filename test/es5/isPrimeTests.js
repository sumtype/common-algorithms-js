'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Is Prime Algorithm: isPrime(number)', function () {
  it('Should return the correct boolean value depending on whether the input number is a prime number', function () {
    expect((0, _es.isPrime)(0)).to.eql(false)
    expect((0, _es.isPrime)(1)).to.eql(false)
    expect((0, _es.isPrime)(2)).to.eql(true)
    expect((0, _es.isPrime)(3)).to.eql(true)
    expect((0, _es.isPrime)(5)).to.eql(true)
    expect((0, _es.isPrime)(4)).to.eql(false)
    expect((0, _es.isPrime)(97)).to.eql(true)
  })
  it('Should return null when no input is provided', function () {
    expect((0, _es.isPrime)()).to.eql(null)
  })
})
