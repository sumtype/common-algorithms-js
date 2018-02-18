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
    global.radixSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })

  function _toConsumableArray (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i]
      }

      return arr2
    } else {
      return Array.from(arr)
    }
  }

  var radixSort = function radixSort () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10

    if (input === null) return null
    for (var i = 0; i < Math.round(Math.log(Math.max.apply(Math, _toConsumableArray(input.map(function (n) {
      return Math.abs(n)
    })))) / Math.log(base)) + 1; i++) {
      input = merge(split(input, base, i))
    } return merge(splitBySign(input))
  }

  var merge = function merge (array) {
    var output = []
    for (var i = 0; i < array.length; i++) {
      output = output.concat(array[i])
    } return output
  }

  var split = function split (array, base, digit) {
    var buckets = []
    for (var i = 0; i < base; i++) {
      buckets.push([])
    } for (var _i = 0; _i < array.length; _i++) {
      buckets[Math.abs(Math.floor(array[_i] / Math.pow(base, digit)) % base)].push(array[_i])
    } return buckets
  }

  var splitBySign = function splitBySign (array) {
    var buckets = [[], []]
    for (var i = 0; i < array.length; i++) {
      array[i] < 0 ? buckets[0].unshift(array[i]) : buckets[1].push(array[i])
    } return buckets
  }

  exports.default = radixSort
})
