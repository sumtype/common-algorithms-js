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
    global.bucketSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var bucketSort = function bucketSort () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [null]
    var bucketSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1

    if (input[0] === null) return []
    var min = input[0]
    var max = input[0]
    var output = []
    for (var i = 1; i < input.length; i++) {
      if (input[i] < min) min = input[i]
      if (input[i] > max) max = input[i]
    }
    var bucketCount = Math.floor((max - min) / bucketSize) + 1
    var buckets = new Array(bucketCount)
    for (var _i = 0; _i < buckets.length; _i++) {
      buckets[_i] = []
    } for (var _i2 = 0; _i2 < input.length; _i2++) {
      buckets[Math.floor((input[_i2] - min) / bucketSize)].push(input[_i2])
    } for (var _i3 = 0; _i3 < buckets.length; _i3++) {
      insertionSort(buckets[_i3])
      for (var j = 0; j < buckets[_i3].length; j++) {
        output.push(buckets[_i3][j])
      }
    }
    return output
  }

  function insertionSort (input) {
    for (var i = 0, index = i; i < input.length; i++, index = i) {
      while (index > 0 && input[index] < input[index - 1]) {
        var swap = input[index]
        input[index] = input[index - 1]
        input[index - 1] = swap
        index -= 1
      }
    }
    return input
  }

  exports.default = bucketSort
})
