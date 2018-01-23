/* eslint-env mocha */
const path = require('path')
const sorensonDiceCoefficient = require(path.join(__dirname, '..', 'algorithms', 'sorensonDiceCoefficient.js'))
const expect = require('chai').expect
describe('Sorenson-Dice Coefficient Algorithm: sorensonDiceCoefficient(input1, input2)', () => {
  it('Should return the Sorenson-Dice Coefficient between the input strings.', () => {
    expect(sorensonDiceCoefficient('test', '')).to.eql(0)
    expect(sorensonDiceCoefficient('tex', 'esr')).to.eql(0)
    expect(sorensonDiceCoefficient('texts', 'text')).to.eql(0.8571428571428571)
    expect(sorensonDiceCoefficient('text', 'text')).to.eql(1)
    expect(sorensonDiceCoefficient('text', 'rext')).to.eql(0.6666666666666666)
  })
})
