'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Are Anagrams Algorithm: areAnagrams(strings)', function () {
  it('Should return the correct boolean depending on whether the input array of strings are anagrams of one another', function () {
    expect((0, _es.areAnagrams)(['acb', 'bac', 'cab'])).to.eql(true)
    expect((0, _es.areAnagrams)(['ab', 'bac', 'cab'])).to.eql(false)
    expect((0, _es.areAnagrams)(['cab', 'bca', 'abc', 'bac', 'cba', 'acb'])).to.eql(true)
    expect((0, _es.areAnagrams)(['cab', 'bca', 'bac', 'cba', 'acd'])).to.eql(false)
    expect((0, _es.areAnagrams)([])).to.eql(false)
    expect((0, _es.areAnagrams)()).to.eql(false)
    expect((0, _es.areAnagrams)(['cab'])).to.eql(false)
    expect((0, _es.areAnagrams)(['cb', 'bc'])).to.eql(true)
  })
})
