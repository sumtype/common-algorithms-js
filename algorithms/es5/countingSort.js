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
    global.countingSort = mod.exports
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

  var countingSort = function countingSort () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []

    if (array.length === 0) return []
    var min = Math.min.apply(Math, _toConsumableArray(array))
    var max = Math.max.apply(Math, _toConsumableArray(array))
    var val = 0
    var counts = null
    for (var i = -1; i < array.length; i++) {
      i === -1 ? counts = new Array(max - min + 1).fill(0) : counts[array[i] - min]++
    } for (var _i = 0; _i < counts.length; _i++) {
      for (var j = 0; j < counts[_i]; j++) {
        array[val++] = _i + min
      }
    } return array
  }

  exports.default = countingSort
})
