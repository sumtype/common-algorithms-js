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
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (array === null) return null
    var index = 0
    while (index < array.length) {
      index === 0 || array[index - 1] <= array[index] ? index++ : swapIndicies(array, index--)
    } return array
  }

  var swapIndicies = function swapIndicies (array, index) {
    var temp = array[index]
    array[index] = array[--index]
    array[index] = temp
  }

  exports.default = gnomeSort
})
