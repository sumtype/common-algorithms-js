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
    global.gnomeSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var gnomeSort = function gnomeSort () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0

    while (index < array.length) {
      index === 0 || array[index - 1] <= array[index] ? index++ : swapIndicies(array, index--)
    } return array
  }

  var swapIndicies = function swapIndicies (array, index) {
    var temp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array[index]

    array[index] = array[--index]
    array[index] = temp
  }

  exports.default = gnomeSort
})
