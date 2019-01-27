'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Cocktail Sort Algorithm: cocktailSort(input)', function () {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', function () {
    expect((0, _es.cocktailSort)([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString())
    expect((0, _es.cocktailSort)([10, 9, 8, 6, 3, 15, 168, 2, 4, 4, 26, 186]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186].toString())
  })
  it('Should return an empty array when the input array is empty or unspecified', function () {
    expect((0, _es.cocktailSort)([]).toString()).to.eql([].toString())
    expect((0, _es.cocktailSort)().toString()).to.eql([].toString())
  })
})
