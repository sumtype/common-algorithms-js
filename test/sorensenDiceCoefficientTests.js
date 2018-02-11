/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const sorensenDiceCoefficient = require(path.join(__dirname, '..', 'algorithms', 'sorensenDiceCoefficient.js'))

// Test
describe('Sorensen-Dice Coefficient Algorithm: sorensenDiceCoefficient(input1, input2)', () => {
  it('Should return the Sorenson-Dice Coefficient between the input strings.', () => {
    expect(sorensenDiceCoefficient('test', '')).to.eql(0)
    expect(sorensenDiceCoefficient('tex', 'esr')).to.eql(0)
    expect(sorensenDiceCoefficient('texts', 'text')).to.eql(0.8571428571428571)
    expect(sorensenDiceCoefficient('text', 'text')).to.eql(1)
    expect(sorensenDiceCoefficient('text', 'rext')).to.eql(0.6666666666666666)
  })
})
