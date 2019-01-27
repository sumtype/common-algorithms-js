'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Sattolo Cycle Algorithm: sattoloCycle(array)', function () {
  it('Should return the input array with its indices\' values shuffled such that none are in the same position', function () {
    var array = [10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 24, 4, 26]
    var shuffledArray = (0, _es.sattoloCycle)(array)
    for (var i = 0; i < array.length; i++) {
      expect(shuffledArray[i].toString()).to.not.eql(array[i].toString())
    }array = [10, 9, 8]
    shuffledArray = (0, _es.sattoloCycle)(array)
    for (var _i = 0; _i < array.length; _i++) {
      expect(shuffledArray[_i].toString()).to.not.eql(array[_i].toString())
    }array = [10, 9]
    shuffledArray = (0, _es.sattoloCycle)(array)
    for (var _i2 = 0; _i2 < array.length; _i2++) {
      expect(shuffledArray[_i2].toString()).to.not.eql(array[_i2].toString())
    }
  })
  it('Should return the input array when the input array has one or fewer elements', function () {
    expect((0, _es.sattoloCycle)([]).toString()).to.eql([].toString())
    expect((0, _es.sattoloCycle)(['test']).toString()).to.eql(['test'].toString())
  })
  it('Should return null if the input array is not provided', function () {
    expect((0, _es.sattoloCycle)()).to.eql(null)
  })
})
