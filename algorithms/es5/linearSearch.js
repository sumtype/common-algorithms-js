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
    global.linearSearch = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })

  var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj
  } : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
  }

  var linearSearch = function linearSearch (array, value) {
    var output = null
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      value = JSON.stringify(value)
      for (var i = 0; i < array.length; i++) {
        if (_typeof(array[i]) === 'object') array[i] = JSON.stringify(array[i])
      }
    }
    if (typeof value === 'function') {
      value = '' + value
      for (var _i = 0; _i < array.length; _i++) {
        if (typeof array[_i] === 'function') array[_i] = '' + array[_i]
      }
    }
    for (var _i2 = 0; _i2 < array.length; _i2++) {
      if (array[_i2] === value) output = _i2
    } return output
  }

  exports.default = linearSearch
})
