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
  var countingSort = function countingSort () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0
    var val = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0
    var counts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null

    for (var i = 0; i < array.length; i++) {
      if (min > array[i]) min = array[i]; else if (max < array[i]) max = array[i]
    }
    for (var _i = -1; _i < array.length; _i++) {
      _i === -1 ? counts = new Array(max - min + 1).fill(0) : counts[array[_i] - min]++
    } for (var _i2 = 0; _i2 < counts.length; _i2++) {
      for (var j = 0; j < counts[_i2]; j++) {
        array[val++] = _i2 + min
      }
    } return array
  }

  exports.default = countingSort
})
