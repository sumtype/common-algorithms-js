/*
  A JavaScript module which performs a Rabin-Karp string match to determine whether a given value exists within an input string.  If the specified value is found, the index of the value string inside the input string is returned.  If the specified value is not found in the input string null is returned.
*/

'use strict'

const rabinKarpStringMatch = (input = null, pattern = null) => {
  if (input === null || pattern === null || input.length < pattern.length) return null
  let prime = 2147483647
  let radix = 1024
  let rm = 1
  let patternHash = hashString(pattern, pattern.length, radix, prime)
  let inputHash = hashString(input, pattern.length, radix, prime)
  if (patternHash === inputHash) return 0
  for (let i = 1; i <= pattern.length - 1; i++) rm = (radix * rm) % prime
  for (let i = pattern.length, offset = i - pattern.length + 1; i < input.length; i++, offset = i - pattern.length + 1) {
    inputHash = ((((inputHash + prime - rm * input.charCodeAt(i - pattern.length) % prime) % prime) * radix + input.charCodeAt(i)) % prime)
    if (patternHash === inputHash) return offset
  }
  return null
}

const hashString = (string, length, radix, prime) => {
  let hash = 0
  for (let i = 0; i < length; i++) hash = parseInt(radix * hash + string.charCodeAt(i)) % prime
  return hash
}

export default rabinKarpStringMatch
