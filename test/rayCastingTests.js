/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const rayCasting = require(path.join(__dirname, '..', 'algorithms', 'rayCasting.js'))

// Test
describe('Ray Casting Algorithm: rayCasting(shape, point)', () => {
  it('Should return true if the point exists inside the shape provided.', () => {
    expect(rayCasting([{x: 0, y: 0}, {x: 10, y: 0}, {x: 10, y: 10}, {x: 0, y: 10}], {x: 5, y: 5})).to.eql(true)
    expect(rayCasting([{x: 0, y: 0}, {x: 4, y: 5}, {x: -5, y: 10}, {x: -3, y: -7}, {x: 0, y: -4}], {x: -1, y: -1})).to.eql(true)
  })
  it('Should return false if the point does not exist inside the shape provided', () => {
    expect(rayCasting([{x: 0, y: 0}, {x: 10, y: 0}, {x: 10, y: 10}, {x: 0, y: 10}], {x: 40, y: 40})).to.eql(false)
    expect(rayCasting([{x: 0, y: 0}, {x: 4, y: 5}, {x: -5, y: 10}, {x: -3, y: -7}, {x: 0, y: -4}], {x: -1, y: -15})).to.eql(false)
  })
})
