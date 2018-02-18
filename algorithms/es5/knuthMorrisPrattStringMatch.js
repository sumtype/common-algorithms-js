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
  var input = null
  var pattern = null
  var longestSuffixPrefix = null

  var knuthMorrisPrattStringMatch = function knuthMorrisPrattStringMatch () {
    var userInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var stringPattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''

    input = userInput
    pattern = stringPattern
    if (pattern.length > input.length || pattern.length === 0) return -1
    longestSuffixPrefix = [0]
    for (var i = 1, j = updateLongestSuffixPrefix(longestSuffixPrefix[i - 1], i); i < pattern.length; i++, j = updateLongestSuffixPrefix(longestSuffixPrefix[i - 1], i)) {
      longestSuffixPrefix.push(j)
    } for (var _i = 0, _j = setLongestSuffixPrefix(0, _i); _i < input.length; _i++, _j = setLongestSuffixPrefix(_j, _i)) {
      if (input.charAt(_i) === pattern.charAt(_j++) && _j === pattern.length) return _i - (_j - 1)
    } return -1
  }

  var updateLongestSuffixPrefix = function updateLongestSuffixPrefix () {
    var j = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0

    while (j > 0 && pattern.charAt(i) !== pattern.charAt(j)) {
      j = longestSuffixPrefix[j - 1]
    } if (pattern.charAt(i) === pattern.charAt(j)) j++
    return j
  }

  var setLongestSuffixPrefix = function setLongestSuffixPrefix (j, i) {
    while (j > 0 && input.charAt(i) !== pattern.charAt(j)) {
      j = longestSuffixPrefix[j - 1]
    } return j
  }

  exports.default = knuthMorrisPrattStringMatch
})
