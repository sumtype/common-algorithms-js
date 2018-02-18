/*
  A JavaScript module which returns the Damerau-Levenshtein distance between two input strings.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: "Javascript Damerau Levenshtein Algorithim". 2016. David Hamp-Gonsalves. http://www.davidhampgonsalves.com/Damerau-Levenshtein/.
*/

'use strict'

let matrix = null
let sd = null
let combinedStrings = null

const damerauLevenshteinDistance = (s1 = '', s2 = '') => {
  if (s1.length === 0) return s2.length
  if (s2.length === 0) return s1.length
  matrix = []
  sd = {}
  combinedStrings = s1 + s2
  matrix = setupMatrix(s1, s2)
  for (let i = 0; i < s1.length + s2.length; i++) if (!sd.hasOwnProperty(combinedStrings.charAt(i))) sd[combinedStrings.charAt(i)] = 0
  matrix = updateMatrix(s1, s2)
  return matrix[s1.length + 1][s2.length + 1]
}

const setupMatrix = (s1, s2) => {
  matrix[0] = [s1.length + s2.length]
  for (let i = 0; i <= s1.length; i++) {
    matrix[i + 1] = []
    matrix[i + 1][1] = i
    matrix[i + 1][0] = s1.length + s2.length
  }
  for (let i = 0; i <= s2.length; i++) {
    matrix[1][i + 1] = i
    matrix[0][i + 1] = s1.length + s2.length
  }
  return matrix
}

const updateMatrix = (s1, s2) => {
  for (let i = 1, database = 0; i <= s1.length; i++, database = 0) {
    for (let j = 1, i1 = sd[s2[j - 1]], j1 = database; j <= s2.length; j++, i1 = sd[s2[j - 1]], j1 = database) {
      matrix[i + 1][j + 1] = (s1[i - 1] === s2[j - 1]) ? matrix[i][j] : matrix[i + 1][j + 1] = Math.min(matrix[i][j], Math.min(matrix[i + 1][j], matrix[i][j + 1])) + 1
      if (s1[i - 1] === s2[j - 1]) database = j
      matrix[i + 1][j + 1] = Math.min(matrix[i + 1][j + 1], matrix[i1][j1] + (i - i1 - 1) + 1 + (j - j1 - 1))
    }
    sd[s1[i - 1]] = i
  }
  return matrix
}

export default damerauLevenshteinDistance
