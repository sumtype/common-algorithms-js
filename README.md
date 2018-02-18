# Common Algorithms in JavaScript

[![Build Status](https://travis-ci.org/sumtype/common-algorithms-js.svg?branch=master)](https://travis-ci.org/sumtype/common-algorithms-js) [![Coverage Status](https://coveralls.io/repos/github/sumtype/common-algorithms-js/badge.svg?branch=master)](https://coveralls.io/github/sumtype/common-algorithms-js?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/sumtype/common-algorithms-js/badge.svg)](https://snyk.io/test/github/sumtype/common-algorithms-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm](https://img.shields.io/npm/dt/common-algorithms-js.svg)](https://www.npmjs.com/package/common-algorithms-js)

Common algorithms implemented in JavaScript with [Mocha](https://mochajs.org/)/[Chai](http://chaijs.com/) testing.  Uses [Babel](https://babeljs.io/) and [UMD](https://github.com/umdjs/umd) to transpile algorithm modules from ES6+ to ES5.  Test coverage reports are provided by [nyc](https://github.com/istanbuljs/nyc).  All JavaScript code follows [JavaScript Standard Style](https://standardjs.com/) guidelines.  README.md translations are provided in the [locales](https://github.com/sumtype/common-algorithms-js/tree/master/locales) directory and translated with Google Translate.  Currently [Spanish](https://github.com/sumtype/common-algorithms-js/tree/master/locales/es) is available.  [Contributions](https://github.com/sumtype/common-algorithms-js/blob/master/CONTRIBUTING.md) are welcome!  Follow the guidelines.

### Array

* [Binary Search](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/binarySearch.js)
* [Bubble Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/bubbleSort.js)
* [Bucket Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/bucketSort.js)
* [Cocktail Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/cocktailSort.js)
* [Counting Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/countingSort.js)
* [Durstenfeld Shuffle (a.k.a. Knuth Shuffle)](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/durstenfeldShuffle.js)
* [Gnome Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/gnomeSort.js)
* [Insertion Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/insertionSort.js)
* [Linear Search](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/linearSearch.js)
* [Merge Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/mergeSort.js)
* [Quick Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/quickSort.js)
* [Radix Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/radixSort.js)
* [Reservoir Sampling](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/reservoirSampling.js)
* [Sattolo Cycle](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/sattoloCycle.js)
* [Selection Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/selectionSort.js)
* [Shell Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/shellSort.js)
* [Sleep Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/sleepSort.js)

### Geometry

* [Bezier Curve](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/bezierCurve.js)
* [Ray-Casting](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/rayCasting.js)

### Graph

* [Breadth First Search](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/breadthFirstSearch.js)
* [Depth First Search](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/depthFirstSearch.js)

### Math

* [Fibonacci Number](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/fibonacciNumber.js)
* [Is Prime](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/isPrime.js)
* [Power Set](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/powerSet.js)
* [Prime Factors](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/primeFactors.js)
* [Sieve of Eratosthenes](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/sieveOfEratosthenes.js)

### String

* [Are Anagrams](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/areAnagrams.js)
* [Are Palindromes](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/arePalindromes.js)
* [Boyer-Moore String Match](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/boyerMooreStringMatch.js)
* [Boyer-Moore-Horspool String Match](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/boyerMooreHorspoolStringMatch.js)
* [Brute Force String Match](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/bruteForceStringMatch.js)
* [Damerau-Levenshtein Distance](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/damerauLevenshteinDistance.js)
* [Hamming Distance](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/hammingDistance.js)
* [Has Duplicate Characters](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/hasDuplicateCharacters.js)
* [Knuth-Morris-Pratt String Match](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/knuthMorrisPrattStringMatch.js)
* [Levenshtein Distance](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/levenshteinDistance.js)
* [Longest Common Subsequence](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/longestCommonSubsequence.js)
* [Longest Common Substring](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/longestCommonSubstring.js)
* [Matching Delimiters](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/matchingDelimiters.js)
* [Rabin-Karp String Match](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/rabinKarpStringMatch.js)
* [Sørensen-Dice Coefficient](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/sorensenDiceCoefficient.js)

## Usage

To install the algorithms for use in your project run:

`yarn add common-algorithms-js`

or if you don't have Yarn installed, run:

`npm i common-algorithms-js`

Once you've downloaded the library, you can start using it in your project like this:

**Using require()**

`var algorithms = require('common-algorithms-js/es5').default`

or if you only want a specific algorithm (the Bezier Curve algorithm for example):

`var bezierCurve = require('common-algorithms-js/es5').bezierCurve`

or if you only want a specific category of algorithms (string algorithms for example):

`var stringAlgorithms = require('common-algorithms-js/es5').string`

**Using ES6 Import/Export**

`import * as algorithms from 'common-algorithms-js'`

or if you only want a specific algorithm (the Fibonacci Number algorithm for example):

`import { fibonacciNumber } from 'common-algorithms-js'`

or if you only want a specific category of algorithms (math algorithms for example):

`import { math } from 'common-algorithms-js'`

The default export returns an object that looks something like this:

```
{
  array: {
    binarySearch: function...,
    bubbleSort: function...,
    ...
  },
  geometry: {
    bezierCurve: function...,
    ...
  },
  graph: {
    breadthFirstSearch: function...,
    ...
  },
  math: {
    fibonacciNumber: function...,
    ...
  },
  string: {
    areAnagrams: function...,
    ...
  },
}
```

it contains all the algorithms available in the library.

## Testing

To run the tests yourself you'll need to download the project and install its node module dependencies via [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/).  So, if you haven't already installed [Node.js](https://nodejs.org/) and npm or yarn for use on your command line hop over to the [NVM](https://github.com/creationix/nvm) repository to get setup with the Node.js version you'd like to work with.  Once you have Node.js and npm installed, clone the project onto your computer using the following command in your terminal/command prompt/console:

`git clone https://github.com/sumtype/common-algorithms-js.git`

(Just in case you haven't already installed [Git](https://git-scm.com/), do so by following the installation instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), then enter the previous command again once it's installed.)  Once you've downloaded the project use the following command to navigate to the project's root directory:

`cd common-algorithms-js`

Next, install the project's node module dependencies from npm or yarn.  Do so by entering this command:

`npm i`

or this command:

`yarn`

Once all the dependencies are installed you'll be ready to run the tests.  Enter the following command to run them:

`npm test`

or

`yarn test`

When running `npm test` or `yarn test` all the algorithms, tests, and "./es5.js" file are transpiled based on their corresponding ES6+ files.  This way when running your tests not only are your ES6+ algorithms tested in an ES6+ context, but your transpiled ES5 algorithms are tested in transpiled ES5 test contexts.  Since modules in tests are loaded via "./es.js" or the transpiled "./es5.js" file the export files themselves are tested too.  In addition, [standard](https://www.npmjs.com/package/standard) is run to ensure all ES6+/ES5 code is style compliant and the test breaks if there are issues.

This repository uses [Travis-CI](https://travis-ci.org/sumtype/common-algorithms-js) for deployment testing on Node.js versions 8.9.x and 9.4.x.  Test coverage is reported by [Coveralls](https://coveralls.io/github/sumtype/common-algorithms-js?branch=master).

## Transpiling ES5 Algorithms

You can also transpile the ES5 versions of tests and algorithms manually.  To do so, run:

`npm run transpile-es5`

or

`yarn transpile-es5`
