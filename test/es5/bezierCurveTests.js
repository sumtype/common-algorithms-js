'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Bezier Curve Algorithm: bezierCurve(points)', function () {
  it('Should return the correct bezier curve based on the specified array of points', function () {
    expect(JSON.stringify((0, _es.bezierCurve)([{ x: 0, y: 0 }, { x: 10, y: 3 }]).get(0.5))).to.eql('{"x":5,"y":1.5}')
    expect(JSON.stringify((0, _es.bezierCurve)().get(0.5))).to.eql('{"x":0,"y":0}')
  })
})
