/*
  A JavaScript module which performs a Boyer-Moore-Horspool string match for a given string pattern inside an input string.  If the specified value is found, the index of the pattern string inside the input string is returned.  If the pattern is not found null is returned.
*/

'use strict'

const boyerMooreHorspoolStringMatch = (input = '', pattern = '', alphabetSize = 256) => {
  if (pattern.length > input.length || pattern.length === 0) return null
  let skip = (new Array(alphabetSize)).fill(pattern.length)
  for (var i = 0; i < pattern.length - 1; i++) skip[pattern.charCodeAt(i)] = pattern.length - i - 1
  let k = pattern.length - 1
  while (k < input.length) {
    let j = pattern.length - 1
    i = k
    while (j >= 0 && input[i] === pattern[j]) {
      j -= 1
      i -= 1
    }
    if (j === -1) return i + 1
    k += skip[input.charCodeAt(k)]
  }
  return null
}

export default boyerMooreHorspoolStringMatch
