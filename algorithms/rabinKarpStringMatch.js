/*
  A JavaScript module which performs a Rabin-Karp string match to determine whether a given value exists within an input string.  If the specified value is found, the index of the value string inside the input string is returned.  If the specified value is not found in the input string -1 is returned.  The third argument accepts a boolean value which determines whether or not a Las Vegas check is additionally performed on matching input section and pattern strings.  If that argument is false a Monte Carlo check is performed.
*/

'use strict'

module.exports = exports = function (input, pattern, check) {
  if (input.length < pattern.length) return -1
  var prime, radix, rm, patternHash, inputHash
  prime = 2147483647
  radix = 1024
  rm = 1
  patternHash = hashString(pattern, pattern.length, radix, prime)
  inputHash = hashString(input, pattern.length, radix, prime)
  if (patternHash === inputHash && doubleCheck(input, pattern, 0, check)) return 0
  for (var i = 1; i <= pattern.length - 1; i++) rm = (radix * rm) % prime
  for (i = pattern.length; i < input.length; i++) {
    inputHash = (inputHash + prime - rm * input.charCodeAt(i - pattern.length) % prime) % prime
    inputHash = (inputHash * radix + input.charCodeAt(i)) % prime
    var offset = i - pattern.length + 1
    if (patternHash === inputHash && doubleCheck(input, pattern, offset, check)) return offset
  }
  return -1
}

function hashString (string, length, radix, prime) {
  var hash = 0
  for (var i = 0; i < length; i++) hash = parseInt(radix * hash + string.charCodeAt(i)) % prime
  return hash
}

function doubleCheck (input, pattern, index, check) {
  if (check) for (var i = 0; i < pattern.length; i++) if (pattern.charAt(i) !== input.charAt(i + index)) return false
  return true
}
