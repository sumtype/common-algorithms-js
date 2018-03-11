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
    global.knuthMorrisPrattStringMatch = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var knuthMorrisPrattStringMatch = function knuthMorrisPrattStringMatch () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null

    if (input === null || input.length === 0 || pattern === null || pattern.length === 0) return null
    var lsp = [0]
    for (var i = 1, j = lsp[i - 1]; i < pattern.length; i++, j = lsp[i - 1]) {
      while (j > 0 && pattern.charAt(i) !== pattern.charAt(j)) {
        j = lsp[j - 1]
      } if (pattern.charAt(i) === pattern.charAt(j)) j++
      lsp.push(j)
    }
    for (var _i = 0, _j = 0; _i < input.length; _i++) {
      while (_j > 0 && input.charAt(_i) !== pattern.charAt(_j)) {
        _j = lsp[_j - 1]
      } if (input.charAt(_i) === pattern.charAt(_j) && ++_j === pattern.length) return _i - (_j - 1)
    }
    return null
  }

  exports.default = knuthMorrisPrattStringMatch
})
