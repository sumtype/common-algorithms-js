'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Power Set Algorithm: powerSet(array)', function () {
  it('Should return the correct power set of the given array', function () {
    expect((0, _es.powerSet)([1, 2, 3]).toString()).to.eql([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].toString())
    expect((0, _es.powerSet)([1, 'test', null, true]).toString()).to.eql([[], [1], ['test'], [1, 'test'], [null], [1, null], ['test', null], [1, 'test', null], [true], [1, true], ['test', true], [1, 'test', true], [null, true], [1, null, true], ['test', null, true], [1, 'test', null, true]].toString())
  })
  it('Should return null if no input array is provided', function () {
    expect((0, _es.powerSet)()).to.eql(null)
  })
})
