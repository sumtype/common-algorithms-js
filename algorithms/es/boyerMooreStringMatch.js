/*
  A JavaScript module which performs a Boyer-Moore string match for a given string pattern inside an input string.  If the specified value is found, the index of the pattern string inside the input string is returned.  If the pattern is not found -1 is returned.
*/

'use strict'

const boyerMooreStringMatch = (input = '', pattern = '', characterTable = null, offsetTable = null, j = null) => {
  if (pattern.length > input.length || pattern.length === 0) return -1
  characterTable = createCharacterTable(pattern)
  offsetTable = createOffsetTable(pattern)
  for (let i = pattern.length - 1; i < input.length;) {
    for (j = pattern.length - 1; pattern[j] === input[i]; i--, j--) if (j === 0) return i
    i += Math.ceil(offsetTable[pattern.length - 1 - j], characterTable[input[i]])
  }
  return -1
}

const createCharacterTable = (input = '', alphabetSize = 256, table = (new Array(alphabetSize)).fill(input.length)) => {
  for (let i = 0; i < input.length - 1; i++) table[input[i]] = input.length - 1 - i
  return table
}

const createOffsetTable = (input = '', table = [], lastPrefixPosition = input.length) => {
  for (let i = input.length - 1; i >= 0; i--) {
    if (prefixAt(input, i + 1)) lastPrefixPosition = i + 1
    table[input.length - 1 - i] = lastPrefixPosition - i + input.length - 1
  }
  for (let i = 0, suffixLength = getSuffixLength(input, i); i < input.length - 1; i++, suffixLength = getSuffixLength(input, i)) table[suffixLength] = input.length - 1 - i + suffixLength
  return table
}

const prefixAt = (input = '', index = null) => {
  for (let i = index, j = 0; i < input.length; i++, j++) if (input[i] !== input[j]) return false
  return true
}

const getSuffixLength = (input = '', index = null, length = 0) => {
  for (let i = index, j = input.length - 1; i >= 0 && input[i] === input[j]; i--, j--) length += 1
  return length
}

export default boyerMooreStringMatch
