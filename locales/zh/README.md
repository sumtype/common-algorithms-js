# JavaScript中的常用算法

[![Build Status](https://travis-ci.org/sumtype/common-algorithms-js.svg?branch=master)](https://travis-ci.org/sumtype/common-algorithms-js) [![Coverage Status](https://coveralls.io/repos/github/sumtype/common-algorithms-js/badge.svg?branch=master)](https://coveralls.io/github/sumtype/common-algorithms-js?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/sumtype/common-algorithms-js/badge.svg)](https://snyk.io/test/github/sumtype/common-algorithms-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm](https://img.shields.io/npm/dt/common-algorithms-js.svg)](https://www.npmjs.com/package/common-algorithms-js)

使用[Mocha](https://mochajs.org/)/[Chai](http://chaijs.com/)测试在JavaScript中实现的常用算法。使用[Babel](https://babeljs.io/)和[UMD](https://github.com/umdjs/umd)将算法模块从ES6 +转换为ES5。测试覆盖率报告由[nyc](https://github.com/istanbuljs/nyc)提供，并通过管道传送到[Coveralls](https://coveralls.io/github/sumtype/common-algorithms-js?branch=master)。工作服报告ES6 +算法的覆盖范围（虽然ES6 +和转换的ES5算法都由[Travis-CI](https://travis-ci.org/sumtype/common-algorithms-js)测试）。所有JavaScript代码均遵循[JavaScript标准样式](https://standardjs.com/)指南。自述文件翻译在[locales](https://github.com/sumtype/common-algorithms-js/tree/master/locales)目录中提供，并使用Google Translate进行翻译。目前[西班牙语](https://github.com/sumtype/common-algorithms-js/tree/master/locales/es)，[希伯来语](https://github.com/sumtype/common-algorithms-js/tree/master/locales/he)和[中文](https://github.com/sumtype/common-algorithms-js/tree/master/locales/zh)可用。欢迎[贡献](https://github.com/sumtype/common-algorithms-js/blob/master/CONTRIBUTING.md)！遵循指南。

### 排列

* [二进制搜索](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/binarySearch.js)
* [冒泡排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/bubbleSort.js)
* [铲斗排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/bucketSort.js)
* [鸡尾酒排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/cocktailSort.js)
* [计数排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/countingSort.js)
* [Durstenfeld/Knuth 拖曳](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/durstenfeldShuffle.js)
* [侏儒排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/gnomeSort.js)
* [插入排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/insertionSort.js)
* [线性搜索](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/linearSearch.js)
* [合并排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/mergeSort.js)
* [快速排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/quickSort.js)
* [基数排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/radixSort.js)
* [水库取样](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/reservoirSampling.js)
* [Sattolo 周期](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/sattoloCycle.js)
* [选择排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/selectionSort.js)
* [壳牌排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/shellSort.js)
* [睡觉排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/sleepSort.js)

### 几何

* [贝齐尔曲线](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/bezierCurve.js)
* [光线投射](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/rayCasting.js)

### 图形

* [广度优先搜索](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/breadthFirstSearch.js)
* [深度优先搜索](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/depthFirstSearch.js)
* [Kahn 拓扑排序](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/kahnTopologicalSort.js)

### 数学

* [斐波纳契数](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/fibonacciNumber.js)
* [主要](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/isPrime.js)
* [电源组](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/powerSet.js)
* [主要原因](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/primeFactors.js)
* [筛子 Atkin](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/sieveOfAtkin.js)
* [筛子 Eratosthenes](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/sieveOfEratosthenes.js)

### 串

* [字谜](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/areAnagrams.js)
* [回文](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/arePalindromes.js)
* [Boyer-Moore 字符串匹配](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/boyerMooreStringMatch.js)
* [Boyer-Moore-Horspool 字符串匹配](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/boyerMooreHorspoolStringMatch.js)
* [蛮力字符串匹配](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/bruteForceStringMatch.js)
* [Damerau-Levenshtein 距离](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/damerauLevenshteinDistance.js)
* [Hamming 距离](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/hammingDistance.js)
* [有重复的字符](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/hasDuplicateCharacters.js)
* [Knuth-Morris-Pratt 字符串匹配](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/knuthMorrisPrattStringMatch.js)
* [Levenshtein 距离](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/levenshteinDistance.js)
* [最长的共同子序列](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/longestCommonSubsequence.js)
* [最长的公共子串](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/longestCommonSubstring.js)
* [匹配分隔符](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/matchingDelimiters.js)
* [Rabin-Karp 字符串匹配](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/rabinKarpStringMatch.js)
* [Sørensen-Dice 系数](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/sorensenDiceCoefficient.js)

## 用法

要安装在项目运行中使用的算法：

`yarn add common-algorithms-js`

或者如果您没有安装Yarn，请运行：

`npm i common-algorithms-js`

下载完库后，您可以在项目中开始使用它，如下所示：

**运用 require()**

`var algorithms = require('common-algorithms-js/es5').default`

或者如果您只想要一个特定的算法（例如贝齐尔曲线算法）：

`var bezierCurve = require('common-algorithms-js/es5').bezierCurve`

或者如果您只想要特定类别的算法（例如字符串算法）：

`var stringAlgorithms = require('common-algorithms-js/es5').string`

**使用ES6导入/导出**

`import * as algorithms from 'common-algorithms-js'`

或者如果您只想要一个特定的算法（例如斐波纳契数算法）：

`import { fibonacciNumber } from 'common-algorithms-js'`

或者如果您只想要特定类别的算法（例如数学算法）：

`import { math } from 'common-algorithms-js'`

默认导出返回一个如下所示的对象：

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

它包含库中可用的所有算法。

## 测试

要自己运行测试，您需要下载项目并通过[yarn](https://yarnpkg.com/en/)或[npm](https://www.npmjs.com/)安装其节点模块依赖项。 因此，如果您尚未安装[Node.js](https://nodejs.org/)并在命令行中使用npm或yarn，请跳至[NVM](https://github.com/creationix/nvm)存储库，用于使用您想要使用的Node.js版本进行设置。 安装Node.js和npm后，在终端/命令提示符/控制台中使用以下命令将项目克隆到计算机上：

`git clone https://github.com/sumtype/common-algorithms-js.git`

（如果您尚未安装[Git](https://git-scm.com/)，请按照安装说明进行操作[此处](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)，然后在安装后再次输入上一个命令。）下载项目后，使用以下命令导航到项目的根目录：

`cd common-algorithms-js`

接下来，从npm或yarn安装项目的节点模块依赖项。 输入以下命令即可：

`npm i`

或者这个命令：

`yarn`

一旦安装了所有依赖项，您就可以运行测试了。 输入以下命令以运行它们：

`npm test`

要么

`yarn test`

运行`npm test`或`yarn test`时，所有算法，测试和“./es5.js”文件都是根据相应的ES6 +文件进行转换的。 这种方式在运行测试时不仅在ES6 +上下文中测试了ES6 +算法，而且在转换后的ES5测试环境中测试了转换后的ES5算法。 由于测试中的模块是通过“./es.js”或已编译的“./es5.js”文件加载的，因此导出文件本身也会被测试。 此外，还运行[标准](https://www.npmjs.com/package/standard)以确保所有ES6+/ES5代码都符合样式，如果出现问题，测试会中断。

该存储库使用[Travis-CI](https://travis-ci.org/sumtype/common-algorithms-js)在Node.js版本10.15.x和11.8.x上进行部署测试。 Coveralls报告测试覆盖率。 测试报告由nyc生成。

## 透明ES5算法

您也可以手动转换ES5版本的测试和算法。 为此，请运行：

`npm run transpile-es5`

要么

`yarn transpile-es5`
