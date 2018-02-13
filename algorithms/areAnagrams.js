/*
  A JavaScript module which outputs a boolean based on whether the input array of strings are anagrams of one another.
*/

'use strict'

module.exports = exports = (s = []) => {
  if (s.length <= 1 || !s.every(e => e.length === s[0].length)) return false
  let total = s[0].split('').map(c => c.codePointAt(0)).reduce((a, b) => a + b)
  for (let i = 1; i < s.length; i++) if (s[i].split('').map(c => c.codePointAt(0)).reduce((a, b) => a + b) !== total) return false
  return true
}
