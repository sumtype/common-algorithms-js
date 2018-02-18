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
    var characterTable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null
    var offsetTable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null
    var j = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null

    if (pattern.length > input.length || pattern.length === 0) return -1
    characterTable = createCharacterTable(pattern)
    offsetTable = createOffsetTable(pattern)
    for (var i = pattern.length - 1; i < input.length;) {
      for (j = pattern.length - 1; pattern[j] === input[i]; i--, j--) {
        if (j === 0) return i
      }i += Math.ceil(offsetTable[pattern.length - 1 - j], characterTable[input[i]])
    }
    return -1
  }

  var createCharacterTable = function createCharacterTable () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var alphabetSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 256
    var table = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Array(alphabetSize).fill(input.length)

    for (var i = 0; i < input.length - 1; i++) {
      table[input[i]] = input.length - 1 - i
    } return table
  }

  var createOffsetTable = function createOffsetTable () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var table = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
    var lastPrefixPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : input.length

    for (var i = input.length - 1; i >= 0; i--) {
      if (prefixAt(input, i + 1)) lastPrefixPosition = i + 1
      table[input.length - 1 - i] = lastPrefixPosition - i + input.length - 1
    }
    for (var _i = 0, suffixLength = getSuffixLength(input, _i); _i < input.length - 1; _i++, suffixLength = getSuffixLength(input, _i)) {
      table[suffixLength] = input.length - 1 - _i + suffixLength
    } return table
  }

  var prefixAt = function prefixAt () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null

    for (var i = index, j = 0; i < input.length; i++, j++) {
      if (input[i] !== input[j]) return false
    } return true
  }

  var getSuffixLength = function getSuffixLength () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null
    var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0

    for (var i = index, j = input.length - 1; i >= 0 && input[i] === input[j]; i--, j--) {
      length += 1
    } return length
  }

  exports.default = boyerMooreStringMatch
})
