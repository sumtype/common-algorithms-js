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
    var sorted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true

    while (sorted) {
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          array = swapIndicies(array, i, 1)
          sorted = true
        }
      }
      if (!sorted) break
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

  var swapIndicies = function swapIndicies () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0
    var temp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : array[index]

    array[index] = array[index + direction]
    array[index + direction] = temp
    return array
  }

  exports.default = cocktailSort
})
