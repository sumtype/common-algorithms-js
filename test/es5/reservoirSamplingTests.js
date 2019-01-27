'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Reservoir Sampling Algorithm: reservoirSampling(array, size)', function () {
  it('Should return an array with length equal to the input size integer filled with randomly selected elements of the input array', function () {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var sampledArray = (0, _es.reservoirSampling)(array, 5)
    for (var i = 0; i < sampledArray.length; i++) {
      expect(array.includes(sampledArray[i])).to.eql(true)
    }expect(array.toString().indexOf(sampledArray.toString().substr(1, sampledArray.toString().length - 1))).to.eql(-1)
    array = [21, 42, 693, 694, 68905, 76, 67, 823, 95, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    sampledArray = (0, _es.reservoirSampling)(array, 5)
    for (var _i = 0; _i < sampledArray.length; _i++) {
      expect(array.includes(sampledArray[_i])).to.eql(true)
    }expect(array.toString().indexOf(sampledArray.toString().substr(1, sampledArray.toString().length - 1))).to.eql(-1)
  })
  it('Should return null if either the input array or size are unspecified', function () {
    expect((0, _es.reservoirSampling)([])).to.eql(null)
    expect((0, _es.reservoirSampling)()).to.eql(null)
  })
})
