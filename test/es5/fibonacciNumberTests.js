'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Fibonacci Number Algorithm: fibonacciNumber(number)', function () {
  it('Should return the correct nth Fibonacci number based on the input integer', function () {
    expect((0, _es.fibonacciNumber)(0)).to.eql(0)
    expect((0, _es.fibonacciNumber)(1)).to.eql(1)
    expect((0, _es.fibonacciNumber)(2)).to.eql(1)
    expect((0, _es.fibonacciNumber)(3)).to.eql(2)
    expect((0, _es.fibonacciNumber)(4)).to.eql(3)
    expect((0, _es.fibonacciNumber)(5)).to.eql(5)
    expect((0, _es.fibonacciNumber)(6)).to.eql(8)
    expect((0, _es.fibonacciNumber)(7)).to.eql(13)
    expect((0, _es.fibonacciNumber)(8)).to.eql(21)
    expect((0, _es.fibonacciNumber)(9)).to.eql(34)
    expect((0, _es.fibonacciNumber)(10)).to.eql(55)
    expect((0, _es.fibonacciNumber)()).to.eql(0)
  })
  it('Should return null if the input is a negative integer', function () {
    expect((0, _es.fibonacciNumber)(-1)).to.eql(null)
  })
})
