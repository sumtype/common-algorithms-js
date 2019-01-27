(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory)
  } else if (typeof exports !== 'undefined') {
    factory(exports)
  } else {
    var mod = {
      exports: {}
    }
    factory(mod.exports)
    global.quickSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var quickSort = function quickSort () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (input === null) return null
    var sort = function sort (first, last) {
      if (typeof first === 'undefined') first = 0
      if (typeof last === 'undefined') last = input.length - 1
      if (first < last) {
        var swap = null
        var pivot = first
        var lowIndex = first
        var highIndex = last
        while (lowIndex < highIndex) {
          while (input[lowIndex] <= input[pivot] && lowIndex < last) {
            lowIndex += 1
          } while (input[highIndex] > input[pivot]) {
            highIndex -= 1
          } if (lowIndex < highIndex) {
            swap = input[lowIndex]
            input[lowIndex] = input[highIndex]
            input[highIndex] = swap
          }
        }
        swap = input[pivot]
        input[pivot] = input[highIndex]
        input[highIndex] = swap
        sort(first, highIndex - 1)
        sort(highIndex + 1, last)
      }
      return input
    }
    return sort()
  }

  exports.default = quickSort
})
