/*
  A JavaScript module which resolves the longest common subsequence inside two input strings.  If there is  a subsequence, the longest one is returned.  If there is no common subsequence, null is returned.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: "Algorithm Implementation/Strings/Longest Common Subsequence - Wikibooks, Open Books For An Open World". 2016. En.Wikibooks.Org. https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Longest_common_subsequence#JavaScript.
*/

'use strict'

const longestCommonSubsequence = (s1 = null, s2 = null) => {
  if (s1 === null || s2 === null) return null
  let c = []
  for (let i = 0; i <= s1.length; i++) c.push([0])
  for (let i = 0; i < s2.length; i++) c[0].push(0)
  for (let i = 0; i < s1.length; i++) for (var j = 0; j < s2.length; j++) c[i + 1][j + 1] = s1[i] === s2[j] ? c[i][j] + 1 : Math.max(c[i + 1][j], c[i][j + 1])
  let sequence = (function backTrack (n1, n2) {
    if (n1 * n2 === 0) return ''
    if (s1[n1 - 1] === s2[n2 - 1]) return backTrack(n1 - 1, n2 - 1) + s1[n1 - 1]
    return c[n1][n2 - 1] > c[n1 - 1][n2] ? backTrack(n1, n2 - 1) : backTrack(n1 - 1, n2)
  })(s1.length, s2.length)
  if (sequence === '') sequence = null
  return sequence
}

export default longestCommonSubsequence
