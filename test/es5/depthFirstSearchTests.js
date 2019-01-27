'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Depth First Search Algorithm: depthFirstSearch(input)', function () {
  it('Should return true when given a conncted graph\'s adjacency matrix', function () {
    expect((0, _es.depthFirstSearch)([[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])).to.eql(true)
    expect((0, _es.depthFirstSearch)([[0, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]])).to.eql(true)
  })
  it('Should return false when given a disconncted graph\'s adjacency matrix', function () {
    expect((0, _es.depthFirstSearch)([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])).to.eql(false)
  })
  it('Should return null when no input is provided', function () {
    expect((0, _es.depthFirstSearch)()).to.eql(null)
  })
})
