'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es5')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Is Prime ES5 Algorithm: isPrime(number)', function () {
  it('Should return the correct boolean value depending on whether the input number is a prime number.', function () {
    expect((0, _es.isPrime)(0)).to.eql(false)
    expect((0, _es.isPrime)(1)).to.eql(false)
    expect((0, _es.isPrime)(2)).to.eql(true)
    expect((0, _es.isPrime)(3)).to.eql(true)
    expect((0, _es.isPrime)(5)).to.eql(true)
    expect((0, _es.isPrime)(4)).to.eql(false)
    expect((0, _es.isPrime)(97)).to.eql(true)
  })
})
