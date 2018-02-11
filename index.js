/*
  A JavaScript module which includes several common algorithms.
*/

'use strict'

// Native Node Modules
const path = require('path')

// Algorithm Exports
exports.selectionSort = require(path.join(__dirname, 'algorithms', 'selectionSort'))
exports.bubbleSort = require(path.join(__dirname, 'algorithms', 'bubbleSort'))
exports.linearSearch = require(path.join(__dirname, 'algorithms', 'linearSearch'))
exports.bruteForceStringMatch = require(path.join(__dirname, 'algorithms', 'bruteForceStringMatch'))
exports.mergeSort = require(path.join(__dirname, 'algorithms', 'mergeSort'))
exports.quickSort = require(path.join(__dirname, 'algorithms', 'quickSort'))
exports.binarySearch = require(path.join(__dirname, 'algorithms', 'binarySearch'))
exports.insertionSort = require(path.join(__dirname, 'algorithms', 'insertionSort'))
exports.durstenfeldShuffle = require(path.join(__dirname, 'algorithms', 'durstenfeldShuffle'))
exports.depthFirstSearch = require(path.join(__dirname, 'algorithms', 'depthFirstSearch'))
exports.breadthFirstSearch = require(path.join(__dirname, 'algorithms', 'breadthFirstSearch'))
exports.longestCommonSubstring = require(path.join(__dirname, 'algorithms', 'longestCommonSubstring'))
exports.longestCommonSubsequence = require(path.join(__dirname, 'algorithms', 'longestCommonSubsequence'))
exports.levenshteinDistance = require(path.join(__dirname, 'algorithms', 'levenshteinDistance'))
exports.knuthMorrisPrattStringMatch = require(path.join(__dirname, 'algorithms', 'knuthMorrisPrattStringMatch'))
exports.rabinKarpStringMatch = require(path.join(__dirname, 'algorithms', 'rabinKarpStringMatch'))
exports.boyerMooreStringMatch = require(path.join(__dirname, 'algorithms', 'boyerMooreStringMatch'))
exports.boyerMooreHorspoolStringMatch = require(path.join(__dirname, 'algorithms', 'boyerMooreHorspoolStringMatch'))
exports.sorensonDiceCoefficient = require(path.join(__dirname, 'algorithms', 'sorensonDiceCoefficient'))
exports.bucketSort = require(path.join(__dirname, 'algorithms', 'bucketSort'))
exports.shellSort = require(path.join(__dirname, 'algorithms', 'shellSort'))
exports.damerauLevenshteinDistance = require(path.join(__dirname, 'algorithms', 'damerauLevenshteinDistance'))
exports.countingSort = require(path.join(__dirname, 'algorithms', 'countingSort'))
exports.gnomeSort = require(path.join(__dirname, 'algorithms', 'gnomeSort'))
exports.rayCasting = require(path.join(__dirname, 'algorithms', 'rayCasting'))
exports.cocktailSort = require(path.join(__dirname, 'algorithms', 'cocktailSort'))
exports.sattoloCycle = require(path.join(__dirname, 'algorithms', 'sattoloCycle'))
exports.sieveOfEratosthenes = require(path.join(__dirname, 'algorithms', 'sieveOfEratosthenes'))
exports.powerSet = require(path.join(__dirname, 'algorithms', 'powerSet'))
exports.radixSort = require(path.join(__dirname, 'algorithms', 'radixSort'))

module.exports = exports
