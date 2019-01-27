'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Linear Search Algorithm: linearSearch(input, value)', function () {
  it('Should return the proper index value of a found element when the value exists inside an element of the input array', function () {
    expect((0, _es.linearSearch)([10, 9], 9)).to.eql(1)
    expect((0, _es.linearSearch)([10, 'hello'], 'hello')).to.eql(1)
    expect((0, _es.linearSearch)([10, true], true)).to.eql(1)
    expect((0, _es.linearSearch)([10, null], null)).to.eql(1)
    expect((0, _es.linearSearch)([10, {}], {})).to.eql(1)
    expect((0, _es.linearSearch)([10, undefined], undefined)).to.eql(1)
    expect((0, _es.linearSearch)([10, function () {}], function () {})).to.eql(1)
  })
  it('Should return null when the given value does not exist inside an element of the input array', function () {
    expect((0, _es.linearSearch)([10, 9], 8)).to.eql(null)
  })
})
