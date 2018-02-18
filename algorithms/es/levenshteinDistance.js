/*
  A JavaScript module which returns the Levenshtein distance between two input strings.  Also known as the edit distance, the minimum number of substitutions, additions, and/or deletions to change one input string into the other.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: "Algorithm Implementation/Strings/Levenshtein Distance - Wikibooks, Open Books For An Open World". 2016. En.Wikibooks.Org. https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript.
*/

'use strict'

const levenshteinDistance = (s1 = null, s2 = null) => {
  if (s1 === null || s2 === null) return null
  if (s1.length === 0) return s2.length
  if (s2.length === 0) return s1.length
  let matrix = []
  for (let i = 0; i <= s2.length; i++) matrix[i] = [i]
  for (let i = 0; i <= s1.length; i++) matrix[0][i] = i
  for (let i = 1; i <= s2.length; i++) for (let j = 1; j <= s1.length; j++) matrix[i][j] = s2.charAt(i - 1) === s1.charAt(j - 1) ? matrix[i - 1][j - 1] : Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1))
  return matrix[s2.length][s1.length]
}

export default levenshteinDistance
