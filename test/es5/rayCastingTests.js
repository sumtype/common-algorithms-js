'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es5')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Ray Casting ES5 Algorithm: rayCasting(shape, point)', function () {
  it('Should return true if the point exists inside the shape provided.', function () {
    expect((0, _es.rayCasting)([{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }], { x: 5, y: 5 })).to.eql(true)
    expect((0, _es.rayCasting)([{ x: 0, y: 0 }, { x: 4, y: 5 }, { x: -5, y: 10 }, { x: -3, y: -7 }, { x: 0, y: -4 }], { x: -1, y: -1 })).to.eql(true)
  })
  it('Should return false if the point does not exist inside the shape provided', function () {
    expect((0, _es.rayCasting)([{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }], { x: 40, y: 40 })).to.eql(false)
    expect((0, _es.rayCasting)([{ x: 0, y: 0 }, { x: 4, y: 5 }, { x: -5, y: 10 }, { x: -3, y: -7 }, { x: 0, y: -4 }], { x: -1, y: -15 })).to.eql(false)
  })
})
