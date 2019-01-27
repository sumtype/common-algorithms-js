'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Counting Sort Algorithm: countingSort(array)', function () {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', function () {
    expect((0, _es.countingSort)([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString())
    expect((0, _es.countingSort)([8, 7, 6, 5, 4, 3, 2, 1]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
    expect((0, _es.countingSort)([5, 8, 6, 7, 4, 1, 2, 3]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
    expect((0, _es.countingSort)([1, 2, 3, 4, 5, 6, 7, 8]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
  })
  it('Should return an empty array when no input array is provided', function () {
    expect((0, _es.countingSort)().toString()).to.eql([].toString())
  })
})
