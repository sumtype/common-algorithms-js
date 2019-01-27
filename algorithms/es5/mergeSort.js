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
    global.mergeSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var mergeSort = function mergeSort () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (input === null) return null
    var partition = function partition (low, high) {
      if (low < high) {
        var mid = parseInt((low + high) / 2, 10)
        partition(low, mid)
        partition(mid + 1, high)
        return merge(low, mid, high)
      }
      return input
    }
    var merge = function merge (low, mid, high) {
      var index = low
      var lowIndex = low
      var midIndex = mid + 1
      var holder = []
      while (lowIndex <= mid && midIndex <= high) {
        if (input[lowIndex] <= input[midIndex]) {
          holder[index] = input[lowIndex]
          lowIndex += 1
        } else {
          holder[index] = input[midIndex]
          midIndex += 1
        }
        index += 1
      }
      if (lowIndex > mid) {
        for (var i = midIndex; i <= high; i++) {
          holder[index] = input[i]
          index += 1
        }
      } else {
        for (var _i = lowIndex; _i <= mid; _i++) {
          holder[index] = input[_i]
          index += 1
        }
      }
      for (var _i2 = low; _i2 <= high; _i2++) {
        input[_i2] = holder[_i2]
      } return input
    }
    return partition(0, input.length - 1)
  }

  exports.default = mergeSort
})
