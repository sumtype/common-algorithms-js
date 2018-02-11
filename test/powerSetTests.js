/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const powerSet = require(path.join(__dirname, '..', 'algorithms', 'powerSet.js'))

// Test
describe('Power Set Algorithm: powerSet(array)', () => {
  it('Should return the correct power set of the given array.', () => {
    expect(powerSet([1, 2, 3]).toString()).to.eql([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].toString())
    expect(powerSet([1, 'test', null, true]).toString()).to.eql([[], [1], ['test'], [1, 'test'], [null], [1, null], ['test', null], [1, 'test', null], [true], [1, true], ['test', true], [1, 'test', true], [null, true], [1, null, true], ['test', null, true], [1, 'test', null, true]].toString())
  })
})
