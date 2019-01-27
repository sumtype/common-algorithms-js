'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Durstenfeld Shuffle Algorithm: durstenfeldShuffle(input)', function () {
  it('Should return the input array with its indices\' values shuffled', function () {
    expect((0, _es.durstenfeldShuffle)([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.not.eql([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26].toString())
  })
  it('Should return null when no input is provided', function () {
    expect((0, _es.durstenfeldShuffle)()).to.eql(null)
  })
})
