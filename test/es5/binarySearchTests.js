'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Binary Search Algorithm: binarySearch(input, value)', function () {
  it('Should return the index of the specified value when given an input array of numbers ordered from low to high wherein the specified value is contained', function () {
    expect((0, _es.binarySearch)([1, 2, 4, 5, 7, 8], 2)).to.eql(1)
  })
  it('Should return null when the specified value does not exist in the input array of numbers ordered from low to high', function () {
    expect((0, _es.binarySearch)([1, 2, 4, 5, 7, 8], 10)).to.eql(null)
  })
  it('Should return null when the input array is empty', function () {
    expect((0, _es.binarySearch)([], 10)).to.eql(null)
  })
  it('Should return the index of a null value if there is one in the input array when the input value is unspecified', function () {
    expect((0, _es.binarySearch)([null])).to.eql(0)
  })
  it('Should return the index of a null value neither input values are specified', function () {
    expect((0, _es.binarySearch)()).to.eql(null)
  })
})
