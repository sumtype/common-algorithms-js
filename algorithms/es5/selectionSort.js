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
    global.selectionSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var selectionSort = function selectionSort () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (array === null) return null
    for (var i = 0, min = i; i < array.length; i++, min = i) {
      for (var j = i; j < array.length; j++) {
        if (array[j] < array[min]) min = j
      } var swap = array[i]
      array[i] = array[min]
      array[min] = swap
    }
    return array
  }

  exports.default = selectionSort
})
