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
  var input = null

  var mergeSort = function mergeSort () {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []

    input = a
    return partition(0, input.length - 1)
  }

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
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : low
    var lowIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : low
    var midIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : mid + 1
    var holder = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : []

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

  exports.default = mergeSort
})
