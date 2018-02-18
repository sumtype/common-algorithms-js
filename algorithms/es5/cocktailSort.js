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
    global.cocktailSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var cocktailSort = function cocktailSort () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []

    if (array.length === 0) return []
    var sorted = true
    while (sorted) {
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          array = swapIndicies(array, i, 1)
          sorted = true
        }
      }
      sorted = false
      for (var _i = array.length - 1; _i > 0; _i--) {
        if (array[_i - 1] > array[_i]) {
          array = swapIndicies(array, _i, -1)
          sorted = true
        }
      }
    }
    return array
  }

  var swapIndicies = function swapIndicies (array, index, direction) {
    var temp = array[index]
    array[index] = array[index + direction]
    array[index + direction] = temp
    return array
  }

  exports.default = cocktailSort
})
