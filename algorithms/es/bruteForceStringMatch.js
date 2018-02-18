/*
  A JavaScript module which performs a brute force string match for a given string pattern inside an input string.  If the specified value is found, the index of the pattern string inside the input string is returned.  If the specified pattern is not found in the input string null is returned.
*/

'use strict'

const bruteForceStringMatch = (input = '', pattern = '') => {
  if (pattern.length > input.length || input === '' || pattern === '') return null
  for (let i = 0, index = i; i < input.length; i++, index = i) {
    for (let j = 0; j < pattern.length; j++) index = pattern[j] === input[index] ? index + 1 : null
    if (index - i === pattern.length) return i
  }
  return null
}

export default bruteForceStringMatch
