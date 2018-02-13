/*
  A JavaScript module which includes several common algorithms.
*/

'use strict'

// Native Node Modules
const path = require('path')

// Array Algorithms
const arrayAlgorithms = {
  binarySearch: require(path.join(__dirname, 'algorithms', 'binarySearch')),
  bubbleSort: require(path.join(__dirname, 'algorithms', 'bubbleSort')),
  bucketSort: require(path.join(__dirname, 'algorithms', 'bucketSort')),
  cocktailSort: require(path.join(__dirname, 'algorithms', 'cocktailSort')),
  countingSort: require(path.join(__dirname, 'algorithms', 'countingSort')),
  durstenfeldShuffle: require(path.join(__dirname, 'algorithms', 'durstenfeldShuffle')),
  gnomeSort: require(path.join(__dirname, 'algorithms', 'gnomeSort')),
  insertionSort: require(path.join(__dirname, 'algorithms', 'insertionSort')),
  linearSearch: require(path.join(__dirname, 'algorithms', 'linearSearch')),
  mergeSort: require(path.join(__dirname, 'algorithms', 'mergeSort')),
  quickSort: require(path.join(__dirname, 'algorithms', 'quickSort')),
  radixSort: require(path.join(__dirname, 'algorithms', 'radixSort')),
  reservoirSampling: require(path.join(__dirname, 'algorithms', 'reservoirSampling')),
  sattoloCycle: require(path.join(__dirname, 'algorithms', 'sattoloCycle')),
  selectionSort: require(path.join(__dirname, 'algorithms', 'selectionSort')),
  shellSort: require(path.join(__dirname, 'algorithms', 'shellSort')),
  sleepSort: require(path.join(__dirname, 'algorithms', 'sleepSort'))
}

// Geometry Algorithms
const geometryAlgorithms = {
  bezierCurve: require(path.join(__dirname, 'algorithms', 'bezierCurve')),
  rayCasting: require(path.join(__dirname, 'algorithms', 'rayCasting'))
}

// Graph Algorithms
const graphAlgorithms = {
  breadthFirstSearch: require(path.join(__dirname, 'algorithms', 'breadthFirstSearch')),
  depthFirstSearch: require(path.join(__dirname, 'algorithms', 'depthFirstSearch'))
}

// Math Algorithms
const mathAlgorithms = {
  fibonacciNumber: require(path.join(__dirname, 'algorithms', 'fibonacciNumber')),
  isPrime: require(path.join(__dirname, 'algorithms', 'isPrime')),
  powerSet: require(path.join(__dirname, 'algorithms', 'powerSet')),
  primeFactors: require(path.join(__dirname, 'algorithms', 'primeFactors')),
  sieveOfEratosthenes: require(path.join(__dirname, 'algorithms', 'sieveOfEratosthenes'))
}

// String Algorithms
const stringAlgorithms = {
  areAnagrams: require(path.join(__dirname, 'algorithms', 'areAnagrams')),
  boyerMooreStringMatch: require(path.join(__dirname, 'algorithms', 'boyerMooreStringMatch')),
  boyerMooreHorspoolStringMatch: require(path.join(__dirname, 'algorithms', 'boyerMooreHorspoolStringMatch')),
  bruteForceStringMatch: require(path.join(__dirname, 'algorithms', 'bruteForceStringMatch')),
  damerauLevenshteinDistance: require(path.join(__dirname, 'algorithms', 'damerauLevenshteinDistance')),
  hammingDistance: require(path.join(__dirname, 'algorithms', 'hammingDistance')),
  knuthMorrisPrattStringMatch: require(path.join(__dirname, 'algorithms', 'knuthMorrisPrattStringMatch')),
  levenshteinDistance: require(path.join(__dirname, 'algorithms', 'levenshteinDistance')),
  longestCommonSubsequence: require(path.join(__dirname, 'algorithms', 'longestCommonSubsequence')),
  longestCommonSubstring: require(path.join(__dirname, 'algorithms', 'longestCommonSubstring')),
  matchingDelimiters: require(path.join(__dirname, 'algorithms', 'matchingDelimiters')),
  rabinKarpStringMatch: require(path.join(__dirname, 'algorithms', 'rabinKarpStringMatch')),
  sorensenDiceCoefficient: require(path.join(__dirname, 'algorithms', 'sorensenDiceCoefficient'))
}

// Array Algorithm Exports
exports.array = arrayAlgorithms
exports.binarySearch = arrayAlgorithms.binarySearch
exports.bubbleSort = arrayAlgorithms.bubbleSort
exports.bucketSort = arrayAlgorithms.bucketSort
exports.cocktailSort = arrayAlgorithms.cocktailSort
exports.countingSort = arrayAlgorithms.countingSort
exports.durstenfeldShuffle = arrayAlgorithms.durstenfeldShuffle
exports.gnomeSort = arrayAlgorithms.gnomeSort
exports.insertionSort = arrayAlgorithms.insertionSort
exports.linearSearch = arrayAlgorithms.linearSearch
exports.mergeSort = arrayAlgorithms.mergeSort
exports.quickSort = arrayAlgorithms.quickSort
exports.radixSort = arrayAlgorithms.radixSort
exports.reservoirSampling = arrayAlgorithms.reservoirSampling
exports.sattoloCycle = arrayAlgorithms.sattoloCycle
exports.selectionSort = arrayAlgorithms.selectionSort
exports.shellSort = arrayAlgorithms.shellSort
exports.sleepSort = arrayAlgorithms.sleepSort

// Geometry Algorithm Exports
exports.geometry = geometryAlgorithms
exports.bezierCurve = geometryAlgorithms.bezierCurve
exports.rayCasting = geometryAlgorithms.rayCasting

// Graph Algorithm Exports
exports.graph = graphAlgorithms
exports.breadthFirstSearch = graphAlgorithms.breadthFirstSearch
exports.depthFirstSearch = graphAlgorithms.depthFirstSearch

// Math Algorithm Exports
exports.math = mathAlgorithms
exports.fibonacciNumber = mathAlgorithms.fibonacciNumber
exports.powerSet = mathAlgorithms.powerSet
exports.primeFactors = mathAlgorithms.primeFactors
exports.sieveOfEratosthenes = mathAlgorithms.sieveOfEratosthenes

// String Algorithm Exports
exports.string = stringAlgorithms
exports.areAnagrams = stringAlgorithms.areAnagrams
exports.boyerMooreStringMatch = stringAlgorithms.boyerMooreStringMatch
exports.boyerMooreHorspoolStringMatch = stringAlgorithms.boyerMooreHorspoolStringMatch
exports.bruteForceStringMatch = stringAlgorithms.bruteForceStringMatch
exports.damerauLevenshteinDistance = stringAlgorithms.damerauLevenshteinDistance
exports.hammingDistance = stringAlgorithms.hammingDistance
exports.knuthMorrisPrattStringMatch = stringAlgorithms.knuthMorrisPrattStringMatch
exports.levenshteinDistance = stringAlgorithms.levenshteinDistance
exports.longestCommonSubsequence = stringAlgorithms.longestCommonSubsequence
exports.longestCommonSubstring = stringAlgorithms.longestCommonSubstring
exports.matchingDelimiters = stringAlgorithms.matchingDelimiters
exports.rabinKarpStringMatch = stringAlgorithms.rabinKarpStringMatch
exports.sorensenDiceCoefficient = stringAlgorithms.sorensenDiceCoefficient

module.exports = exports
