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
    global.boyerMooreStringMatch = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var boyerMooreStringMatch = function boyerMooreStringMatch () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''

    var characterTable = null
    var offsetTable = null
    var j = null
    if (pattern.length > input.length || pattern.length === 0) return null
    characterTable = createCharacterTable(pattern)
    offsetTable = createOffsetTable(pattern)
    for (var i = pattern.length - 1; i < input.length;) {
      for (j = pattern.length - 1; pattern[j] === input[i]; i--, j--) {
        if (j === 0) return i
      }i += Math.ceil(offsetTable[pattern.length - 1 - j], characterTable[input[i]])
    }
    return null
  }

  var createCharacterTable = function createCharacterTable (input) {
    var alphabetSize = 256
    var table = new Array(alphabetSize).fill(input.length)
    for (var i = 0; i < input.length - 1; i++) {
      table[input[i]] = input.length - 1 - i
    } return table
  }

  var createOffsetTable = function createOffsetTable (input) {
    var table = []
    var lastPrefixPosition = input.length
    for (var i = input.length - 1; i >= 0; i--) {
      if (prefixAt(input, i + 1)) lastPrefixPosition = i + 1
      table[input.length - 1 - i] = lastPrefixPosition - i + input.length - 1
    }
    for (var _i = 0, suffixLength = getSuffixLength(input, _i); _i < input.length - 1; _i++, suffixLength = getSuffixLength(input, _i)) {
      table[suffixLength] = input.length - 1 - _i + suffixLength
    } return table
  }

  var prefixAt = function prefixAt (input, index) {
    for (var i = index, j = 0; i < input.length; i++, j++) {
      if (input[i] !== input[j]) return false
    } return true
  }

  var getSuffixLength = function getSuffixLength (input, index) {
    var length = 0
    for (var i = index, j = input.length - 1; i >= 0 && input[i] === input[j]; i--, j--) {
      length += 1
    } return length
  }

  exports.default = boyerMooreStringMatch
})
