/*
  A JavaScript module which resolves the longest common substring inside two input strings.  If there is  a common substring, the longest one is returned.  If there is no common substring, -1 is returned.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: "Algorithm Implementation/Strings/Longest Common Substring - Wikibooks, Open Books For An Open World". 2016. En.Wikibooks.Org. https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Longest_common_substring#JavaScript.
*/

'use strict'

module.exports = exports = function (s1, s2) {
  var substring, table, maxLength, currentSubstringIndex, previousSubstringIndex
  substring = -1
  table = []
  maxLength = 0
  currentSubstringIndex = 0
  previousSubstringIndex = 0
  for (var i = 0; i < s1.length; i++) table[i] = (new Array(s2.length).fill(0))
  for (i = 0; i < s1.length; i++) {
    for (var j = 0; j < s2.length; j++) {
      table[i][j] = s1[i] !== s2[j] ? 0 : ((i === 0 || j === 0) ? 1 : table[i - 1][j - 1] + 1)
      if (table[i][j] > maxLength) {
        maxLength = table[i][j]
        currentSubstringIndex = i - table[i][j] + 1
        substring = previousSubstringIndex === currentSubstringIndex ? substring + s1[i] : '' + s1.substr(currentSubstringIndex, (i + 1) - currentSubstringIndex)
        if (previousSubstringIndex !== currentSubstringIndex) previousSubstringIndex = currentSubstringIndex
      }
    }
  }
  return substring
}
