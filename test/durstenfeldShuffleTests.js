/* eslint-env mocha */
const path = require('path')
const durstenfeldShuffle = require(path.join(__dirname, '..', 'algorithms', 'durstenfeldShuffle.js'))
const expect = require('chai').expect
describe('Durstenfeld Shuffle Algorithm: durstenfeldShuffle(input)', () => {
  it('Should return the input array with its indices\' values shuffled.', () => {
    expect(durstenfeldShuffle([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.not.eql([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26].toString())
  })
})
