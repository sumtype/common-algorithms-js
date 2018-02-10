/*
  A JavaScript module which performs a Boyer-Moore-Horspool string match for a given string pattern inside an input string.  If the specified value is found, the index of the pattern string inside the input string is returned.  If the pattern is not found -1 is returned.
*/

'use strict'

var alphabetSize = 256

module.exports = exports = function (input, pattern) {
  if (pattern.length > input.length || pattern.length === 0) return -1
  var skip = (new Array(alphabetSize)).fill(pattern.length)
  for (var i = 0; i < pattern.length - 1; i++) skip[pattern.charCodeAt(i)] = pattern.length - i - 1
  var k = pattern.length - 1
  while (k < input.length) {
    var j = pattern.length - 1
    i = k
    while (j >= 0 && input[i] === pattern[j]) {
      j -= 1
      i -= 1
    }
    if (j === -1) return i + 1
    k += skip[input.charCodeAt(k)]
  }
  return -1
}
