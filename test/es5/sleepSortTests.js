'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es5')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Sleep Sort ES5 Algorithm: sleepSort(array)', function () {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', function (done) {
    (0, _es.sleepSort)([-5, 0, 18, 18, 16, -26, 29, 2, -4, 4], function (output) {
      expect(output.toString()).to.eql([-26, -5, -4, 0, 2, 4, 16, 18, 18, 29].toString());
      (0, _es.sleepSort)([1, 0, -1], function (output) {
        expect(output.toString()).to.eql([-1, 0, 1].toString())
        done()
      })
    })
  })
  it('Should return an array which has been sorted from low to high values when given an array of numbers when the lowest number appears twice.', function (done) {
    (0, _es.sleepSort)([-5, 0, 18, 18, 16, -26, -26, 29, 2, -4, 4], function (output) {
      expect(output.toString()).to.eql([-26, -26, -5, -4, 0, 2, 4, 16, 18, 18, 29].toString())
      done()
    })
  })
  it('Should return an array which has been sorted from low to high values when given an array of numbers when the highest number appears twice.', function (done) {
    (0, _es.sleepSort)([-5, 0, 18, 18, 16, -26, 29, 2, 29, -4, 4], function (output) {
      expect(output.toString()).to.eql([-26, -5, -4, 0, 2, 4, 16, 18, 18, 29, 29].toString())
      done()
    })
  })
})
