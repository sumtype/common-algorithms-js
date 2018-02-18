/*
  A JavaScript module which performs a Boyer-Moore string match for a given string pattern inside an input string.  If the specified value is found, the index of the pattern string inside the input string is returned.  If the pattern is not found null is returned.
*/

'use strict'

const boyerMooreStringMatch = (input = '', pattern = '') => {
  let characterTable = null
  let offsetTable = null
  let j = null
  if (pattern.length > input.length || pattern.length === 0) return null
  characterTable = createCharacterTable(pattern)
  offsetTable = createOffsetTable(pattern)
  for (let i = pattern.length - 1; i < input.length;) {
    for (j = pattern.length - 1; pattern[j] === input[i]; i--, j--) if (j === 0) return i
    i += Math.ceil(offsetTable[pattern.length - 1 - j], characterTable[input[i]])
  }
  return null
}

const createCharacterTable = (input) => {
  let alphabetSize = 256
  let table = (new Array(alphabetSize)).fill(input.length)
  for (let i = 0; i < input.length - 1; i++) table[input[i]] = input.length - 1 - i
  return table
}

const createOffsetTable = (input) => {
  let table = []
  let lastPrefixPosition = input.length
  for (let i = input.length - 1; i >= 0; i--) {
    if (prefixAt(input, i + 1)) lastPrefixPosition = i + 1
    table[input.length - 1 - i] = lastPrefixPosition - i + input.length - 1
  }
  for (let i = 0, suffixLength = getSuffixLength(input, i); i < input.length - 1; i++, suffixLength = getSuffixLength(input, i)) table[suffixLength] = input.length - 1 - i + suffixLength
  return table
}

const prefixAt = (input, index) => {
  for (let i = index, j = 0; i < input.length; i++, j++) if (input[i] !== input[j]) return false
  return true
}

const getSuffixLength = (input, index) => {
  let length = 0
  for (let i = index, j = input.length - 1; i >= 0 && input[i] === input[j]; i--, j--) length += 1
  return length
}

export default boyerMooreStringMatch
