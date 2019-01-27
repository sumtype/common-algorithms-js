'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { reservoirSampling } from '../../es'

const expect = chai.expect

// Test
describe('Reservoir Sampling Algorithm: reservoirSampling(array, size)', () => {
  it('Should return an array with length equal to the input size integer filled with randomly selected elements of the input array', () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let sampledArray = reservoirSampling(array, 5)
    for (let i = 0; i < sampledArray.length; i++) expect(array.includes(sampledArray[i])).to.eql(true)
    expect(array.toString().indexOf(sampledArray.toString().substr(1, sampledArray.toString().length - 1))).to.eql(-1)
    array = [21, 42, 693, 694, 68905, 76, 67, 823, 95, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    sampledArray = reservoirSampling(array, 5)
    for (let i = 0; i < sampledArray.length; i++) expect(array.includes(sampledArray[i])).to.eql(true)
    expect(array.toString().indexOf(sampledArray.toString().substr(1, sampledArray.toString().length - 1))).to.eql(-1)
  })
  it('Should return null if either the input array or size are unspecified', () => {
    expect(reservoirSampling([])).to.eql(null)
    expect(reservoirSampling()).to.eql(null)
  })
})
