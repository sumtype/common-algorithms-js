'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { linearSearch } from '../../es'

const expect = chai.expect

// Test
describe('Linear Search Algorithm: linearSearch(input, value)', () => {
  it('Should return the proper index value of a found element when the value exists inside an element of the input array', () => {
    expect(linearSearch([10, 9], 9)).to.eql(1)
    expect(linearSearch([10, 'hello'], 'hello')).to.eql(1)
    expect(linearSearch([10, true], true)).to.eql(1)
    expect(linearSearch([10, null], null)).to.eql(1)
    expect(linearSearch([10, {}], {})).to.eql(1)
    expect(linearSearch([10, undefined], undefined)).to.eql(1)
    expect(linearSearch([10, function () {}], function () {})).to.eql(1)
  })
  it('Should return null when the given value does not exist inside an element of the input array', () => {
    expect(linearSearch([10, 9], 8)).to.eql(null)
  })
})
