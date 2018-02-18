/*
  A JavaScript module which performs a Rabin-Karp string match to determine whether a given value exists within an input string.  If the specified value is found, the index of the value string inside the input string is returned.  If the specified value is not found in the input string -1 is returned.  The third argument accepts a boolean value which determines whether or not a Las Vegas check is additionally performed on matching input section and pattern strings.  If that argument is false a Monte Carlo check is performed.
*/

'use strict'

const rabinKarpStringMatch = (input = '', pattern = '', check = null, prime = 2147483647, radix = 1024, rm = 1, patternHash = hashString(pattern, pattern.length, radix, prime), inputHash = hashString(input, pattern.length, radix, prime)) => {
  if (input.length < pattern.length) return -1
  if (patternHash === inputHash && doubleCheck(input, pattern, 0, check)) return 0
  for (let i = 1; i <= pattern.length - 1; i++) rm = (radix * rm) % prime
  for (let i = pattern.length, offset = i - pattern.length + 1; i < input.length; i++, offset = i - pattern.length + 1) {
    inputHash = ((((inputHash + prime - rm * input.charCodeAt(i - pattern.length) % prime) % prime) * radix + input.charCodeAt(i)) % prime)
    if (patternHash === inputHash && doubleCheck(input, pattern, offset, check)) return offset
  }
  return -1
}

const hashString = (string, length, radix, prime, hash = 0) => {
  for (let i = 0; i < length; i++) hash = parseInt(radix * hash + string.charCodeAt(i)) % prime
  return hash
}

const doubleCheck = (input, pattern, index, check) => {
  if (check) for (var i = 0; i < pattern.length; i++) if (pattern.charAt(i) !== input.charAt(i + index)) return false
  return true
}

export default rabinKarpStringMatch
