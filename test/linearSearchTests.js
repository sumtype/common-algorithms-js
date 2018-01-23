/* eslint-env mocha */
const path = require('path')
const linearSearch = require(path.join(__dirname, '..', 'algorithms', 'linearSearch.js'))
const expect = require('chai').expect
describe('Linear Search Algorithm: linearSearch(input, value)', () => {
  it('Should return the proper index value of a found element when the value exists inside an element of the input array.', () => {
    expect(linearSearch([10, 9], 9)).to.eql(1)
    expect(linearSearch([10, 'hello'], 'hello')).to.eql(1)
    expect(linearSearch([10, true], true)).to.eql(1)
    expect(linearSearch([10, null], null)).to.eql(1)
    expect(linearSearch([10, {}], {})).to.eql(1)
    expect(linearSearch([10, undefined], undefined)).to.eql(1)
    expect(linearSearch([10, function () {}], function () {})).to.eql(1)
  })
  it('Should return -1 when the given value does not exist inside an element of the input array.', () => {
    expect(linearSearch([10, 9], 8)).to.eql(-1)
  })
})
