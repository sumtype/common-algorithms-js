'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Are Palindromes Algorithm: arePalindromes(strings)', function () {
  it('Should return the correct boolean depending on whether the input array of strings are all palindromes', function () {
    expect((0, _es.arePalindromes)(['aba'])).to.eql(true)
    expect((0, _es.arePalindromes)(['abaa'])).to.eql(false)
    expect((0, _es.arePalindromes)(['cabac'])).to.eql(true)
    expect((0, _es.arePalindromes)(['cabac', 'babab', 'darad'])).to.eql(true)
    expect((0, _es.arePalindromes)(['cabac', 'babab', 'dara'])).to.eql(false)
    expect((0, _es.arePalindromes)([])).to.eql(false)
    expect((0, _es.arePalindromes)()).to.eql(false)
  })
})
