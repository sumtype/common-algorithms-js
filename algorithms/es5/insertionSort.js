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
    global.insertionSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var insertionSort = function insertionSort () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (array === null) return null
    for (var i = 0, index = i; i < array.length; i++, index = i) {
      while (index > 0 && array[index] < array[index - 1]) {
        var swap = array[index]
        array[index] = array[index - 1]
        array[index - 1] = swap
        index -= 1
      }
    }
    return array
  }

  exports.default = insertionSort
})
