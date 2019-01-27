'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { sleepSort } from '../../es'

const expect = chai.expect

// Test
describe('Sleep Sort Algorithm: sleepSort(array)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', (done) => {
    sleepSort([-5, 0, 18, 18, 16, -26, 29, 2, -4, 4], output => {
      expect(output.toString()).to.eql([-26, -5, -4, 0, 2, 4, 16, 18, 18, 29].toString())
      sleepSort([1, 0, -1], output => {
        expect(output.toString()).to.eql([-1, 0, 1].toString())
        done()
      })
    })
  })
  it('Should return an array which has been sorted from low to high values when given an array of numbers when the lowest number appears twice', (done) => {
    sleepSort([-5, 0, 18, 18, 16, -26, -26, 29, 2, -4, 4], output => {
      expect(output.toString()).to.eql([-26, -26, -5, -4, 0, 2, 4, 16, 18, 18, 29].toString())
      done()
    })
  })
  it('Should return an array which has been sorted from low to high values when given an array of numbers when the highest number appears twice', (done) => {
    sleepSort([-5, 0, 18, 18, 16, -26, 29, 2, 29, -4, 4], output => {
      expect(output.toString()).to.eql([-26, -5, -4, 0, 2, 4, 16, 18, 18, 29, 29].toString())
      done()
    })
  })
  it('Should return null if the input array is not provided', () => {
    expect(sleepSort()).to.eql(null)
  })
})
