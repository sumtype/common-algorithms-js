/*
  A JavaScript module which performs a Boyer-Moore string match for a given string pattern inside an input string.  If the specified value is found, the index of the pattern string inside the input string is returned.  If the pattern is not found -1 is returned.
*/

'use strict'

module.exports = exports = function (input, pattern) {
  if (pattern.length > input.length || pattern.length === 0) return -1
  var characterTable, offsetTable
  characterTable = createCharacterTable(pattern)
  offsetTable = createOffsetTable(pattern)
  for (var i = pattern.length - 1; i < input.length;) {
    for (var j = pattern.length - 1; pattern[j] === input[i]; i--, j--) if (j === 0) return i
    i += Math.ceil(offsetTable[pattern.length - 1 - j], characterTable[input[i]])
  }
  return -1
}

function createCharacterTable (input, alphabetSize) {
  var table = (new Array(alphabetSize)).fill(input.length)
  for (var i = 0; i < input.length - 1; i++) table[input[i]] = input.length - 1 - i
  return table
}

function createOffsetTable (input) {
  var table, lastPrefixPosition
  table = []
  lastPrefixPosition = input.length
  for (var i = input.length - 1; i >= 0; i--) {
    if (prefixAt(input, i + 1)) lastPrefixPosition = i + 1
    table[input.length - 1 - i] = lastPrefixPosition - i + input.length - 1
  }
  for (i = 0; i < input.length - 1; i++) {
    var suffixLength = getSuffixLength(input, i)
    table[suffixLength] = input.length - 1 - i + suffixLength
  }
  return table
}

function prefixAt (input, index) {
  for (var i = index, j = 0; i < input.length; i++, j++) if (input[i] !== input[j]) return false
  return true
}

function getSuffixLength (input, index) {
  var length = 0
  for (var i = index, j = input.length - 1; i >= 0 && input[i] === input[j]; i--, j--) length += 1
  return length
}
