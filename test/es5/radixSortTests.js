'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Radix Sort Algorithm: radixSort(array, base)', function () {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', function () {
    expect((0, _es.radixSort)([10, 9, 8, 6, 3, -5, 0, 15, 168, 186, -26, 298, 2, -45, 4], 10).toString()).to.eql([-45, -26, -5, 0, 2, 3, 4, 6, 8, 9, 10, 15, 168, 186, 298].toString())
  })
  it('Should use base 10 by default if no base input is specified', function () {
    expect((0, _es.radixSort)([10, 9, 8, 6, 3, -5, 0, 15, 168, 186, -26, 298, 2, -45, 4]).toString()).to.eql([-45, -26, -5, 0, 2, 3, 4, 6, 8, 9, 10, 15, 168, 186, 298].toString())
  })
  it('Should return null if no input array is specified', function () {
    expect((0, _es.radixSort)()).to.eql(null)
  })
})
