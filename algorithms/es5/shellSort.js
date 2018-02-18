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
    global.shellSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var shellSort = function shellSort () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (array === null) return null
    var gap = array.length
    do {
      for (var i = gap, value = array[i], j = i; i < array.length; i++, value = array[i], j = i) {
        while (j >= gap && array[j - gap] > value) {
          array[j] = array[j - gap]
          j -= gap
        }
        array[j] = value
      }
      gap = parseInt(gap / 2)
    } while (gap > 0)
    return array
  }

  exports.default = shellSort
})
