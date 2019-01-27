'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { sattoloCycle } from '../../es'

const expect = chai.expect

// Test
describe('Sattolo Cycle Algorithm: sattoloCycle(array)', () => {
  it('Should return the input array with its indices\' values shuffled such that none are in the same position', () => {
    let array = [10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 24, 4, 26]
    let shuffledArray = sattoloCycle(array)
    for (let i = 0; i < array.length; i++) expect(shuffledArray[i].toString()).to.not.eql(array[i].toString())
    array = [10, 9, 8]
    shuffledArray = sattoloCycle(array)
    for (let i = 0; i < array.length; i++) expect(shuffledArray[i].toString()).to.not.eql(array[i].toString())
    array = [10, 9]
    shuffledArray = sattoloCycle(array)
    for (let i = 0; i < array.length; i++) expect(shuffledArray[i].toString()).to.not.eql(array[i].toString())
  })
  it('Should return the input array when the input array has one or fewer elements', () => {
    expect(sattoloCycle([]).toString()).to.eql([].toString())
    expect(sattoloCycle(['test']).toString()).to.eql(['test'].toString())
  })
  it('Should return null if the input array is not provided', () => {
    expect(sattoloCycle()).to.eql(null)
  })
})
