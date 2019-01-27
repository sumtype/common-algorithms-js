'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Quick Sort Algorithm: quickSort(input)', function () {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', function () {
    expect((0, _es.quickSort)([5, 4, 14, 3, 2, 1]).toString()).to.eql([1, 2, 3, 4, 5, 14].toString())
  })
  it('Should return null if no input array is provided', function () {
    expect((0, _es.quickSort)()).to.eql(null)
  })
})
