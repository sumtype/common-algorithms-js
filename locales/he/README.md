# אלגוריתמים נפוצים ב- JavaScript

[![Build Status](https://travis-ci.org/sumtype/common-algorithms-js.svg?branch=master)](https://travis-ci.org/sumtype/common-algorithms-js) [![Coverage Status](https://coveralls.io/repos/github/sumtype/common-algorithms-js/badge.svg?branch=master)](https://coveralls.io/github/sumtype/common-algorithms-js?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/sumtype/common-algorithms-js/badge.svg)](https://snyk.io/test/github/sumtype/common-algorithms-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm](https://img.shields.io/npm/dt/common-algorithms-js.svg)](https://www.npmjs.com/package/common-algorithms-js)

אלגוריתמים נפוצים מיושמים ב- JavaScript עם בדיקות [Mocha](https://mochajs.org/)/[Chai](http://chaijs.com/). משתמש [Babel](https://babeljs.io/) ו- [UMD](https://github.com/umdjs/umd) כדי להעביר מודולי אלגוריתם מ- ES6 + ל- ES5. דוחות כיסוי הבדיקות מסופקים על ידי [nyc](https://github.com/istanbuljs/nyc) ומוצמדים אל [Coveralls](https://coveralls.io/github/sumtype/common-algorithms-js?branch=master). Coverals מדווח על כיסוי עבור אלגוריתמים של ES6+ (אם כי הן ES6+ והן אלגוריתמים ES5 transpiled נבדקים על ידי [Travis-CI](https://travis-ci.org/sumtype/common-algorithms-js). כל קוד JavaScript עוקב אחר הנחיות [JavaScript Standard Style](https://standardjs.com/). תרגומי README ניתנים בספריה [מקומות](https://github.com/sumtype/common-algorithms-js/tree/master/locales) ותורגמו באמצעות Google Translate. נכון לעכשיו [ספרדית](https://github.com/sumtype/common-algorithms-js/tree/master/locales/es) ו- [עברית](https://github.com/sumtype/common-algorithms-js/tree/master/locales/he) זמינים. [תרומות](https://github.com/sumtype/common-algorithms-js/blob/master/CONTRIBUTING.md) יתקבלו בברכה! בצע את ההנחיות.

## מערך

* [חיפוש בינארי](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/binarySearch.js)
* [מיון בועה](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/bubbleSort.js)
* [דלי מיון](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/bucketSort.js)
* [קוקטייל מיין](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/cocktailSort.js)
* [ספירת מיון](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/countingSort.js)
* [דשדוש Durstenfeld/Knuth](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/durstenfeldShuffle.js)
* [גמד](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/gnomeSort.js)
* [מיון מיון](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/insertionSort.js)
* [חיפוש ליניארי](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/linearSearch.js)
* [מזג את המיון](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/mergeSort.js)
* [מיון מהיר](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/quickSort.js)
* [מיין רדיקס](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/radixSort.js)
* [דגימת מאגר](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/reservoirSampling.js)
* [מחזור Sattolo](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/sattoloCycle.js)
* [מיון מיון](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/selectionSort.js)
* [מעטפת מיון](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/shellSort.js)
* [שינה מיון](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/sleepSort.js)

### גיאומטריה

* [עקומת בזיר](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/bezierCurve.js)
* [ריי-יציקה](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/rayCasting.js)

### תרשים

* [רוחב החיפוש הראשון](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/breadthFirstSearch.js)
* [חיפוש עומק ראשון](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/depthFirstSearch.js)
* [מיון טופולוגי Kahn](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/kahnTopologicalSort.js)

### מתמטיקה

* [מספר פיבונאצ'י](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/fibonacciNumber.js)
* [מספר ראשוני](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/isPrime.js)
* [סט כוח](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/powerSet.js)
* [- גורמים ראשוניים](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/primeFactors.js)
* [Atkin מסננת של](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/sieveOfAtkin.js)
* [Eratosthenes מסננת של](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/sieveOfEratosthenes.js)

### מחרוזת

* [האם אנאגרמות](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/areAnagrams.js)
* [האם פלינדרומים](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/arePalindromes.js)
* [מחרוזת התאמה Boyer-Moore](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/boyerMooreStringMatch.js)
* [מחרוזת התאמה Boyer-Moore-Horspool](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/boyerMooreHorspoolStringMatch.js)
* [כוח מחרוזת](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/bruteForceStringMatch.js)
* [מרחק Damerau-Levenshtein](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/damerauLevenshteinDistance.js)
* [מרחק Hamming](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/hammingDistance.js)
* [יש תווים כפולים](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/hasDuplicateCharacters.js)
* [מחרוזת התאמה Knuth-Morris-Pratt](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/knuthMorrisPrattStringMatch.js)
* [מרחק Levenshtein](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/levenshteinDistance.js)
* [התוצאה המשותפת הארוכה ביותר](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/longestCommonSubsequence.js)
* [מחרוזת המשנה הארוכה ביותר](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/longestCommonSubstring.js)
* [מתאמים תואמים](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/matchingDelimiters.js)
* [מחרוזת התאמה Rabin-Karp](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/rabinKarpStringMatch.js)
* [מקדם Sørensen-Dice](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/es/sorensenDiceCoefficient.js)

## שימוש

כדי להתקין את האלגוריתמים לשימוש בפרויקט שלך:

`yarn add common-algorithms-js`

או אם אין לך מותקן Yarn, הפעל:

`npm i common-algorithms-js`

לאחר שתוריד את הספריה, תוכל להתחיל להשתמש בה בפרויקט שלך באופן הבא:

לאחר שתוריד את הספריה, תוכל להתחיל להשתמש בה בפרויקט שלך באופן הבא:

**שימוש require()**

`var algorithms = require('common-algorithms-js/es5').default`

או אם אתה רק רוצה אלגוריתם מסוים (אלגוריתם עקומת Bezier למשל):

`var bezierCurve = require('common-algorithms-js/es5').bezierCurve`

או אם אתה רק רוצה קטגוריה מסוימת של אלגוריתמים (למשל אלגוריתמים מחרוזת):

`var stringAlgorithms = require('common-algorithms-js/es5').string`

**באמצעות ES6 ייבוא/ייצוא**

`import * as algorithms from 'common-algorithms-js'`

או אם אתה רק רוצה אלגוריתם מסוים (אלגוריתם מספר פיבונאצ'י למשל):

`import { fibonacciNumber } from 'common-algorithms-js'`

או אם אתה רק רוצה קטגוריה ספציפית של אלגוריתמים (מתמטיקה אלגוריתמים למשל):

`import { math } from 'common-algorithms-js'`

ייצוא ברירת המחדל מחזיר אובייקט שנראה בערך כך:

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

הוא מכיל את כל האלגוריתמים הזמינים בספריה.

## בדיקה

כדי להפעיל את הבדיקות בעצמך יהיה עליך להוריד את הפרויקט ולהתקין את התלות של מודול הצומת באמצעות [yarn](https://yarnpkg.com/en/) או [npm](https://www.npmjs.com/). לכן, אם עדיין לא התקנת את [Node.js](https://nodejs.org/) ו- npm או חוט לשימוש בקו שורת הפקודה שלך ל- [NVM](https://github.com/Createix/nvm) מאגר כדי לקבל התקנה עם הגירסה Node.js אתה רוצה לעבוד עם. ברגע שיש לך Node.js ו npm מותקן, לשכפל את הפרויקט על גבי המחשב באמצעות הפקודה הבאה במסוף / שורת הפקודה / קונסולת:

`git clone https://github.com/sumtype/common-algorithms-js.git`

(רק אם טרם התקנת את [Git](https://git-scm.com/), בצע זאת על-ידי ביצוע הוראות ההתקנה [here](https://git-scm.com/book/en/v2/Get-Started-Installing-Git), ולאחר מכן להזין את הפקודה הקודמת שוב לאחר התקנתו). לאחר שהורדת את הפרויקט השתמש בפקודה הבאה כדי לנווט לספריית הבסיס של הפרוייקט:

`cd common-algorithms-js`

לאחר מכן, התקן את התצורה של מודול הצומת של הפרוייקט מ- npm או מחוט. בצע זאת על ידי הזנת פקודה זו:

`npm i`

או פקודה זו:

`yarn`

לאחר כל התלות מותקנים אתה תהיה מוכן להפעיל את הבדיקות. הזן את הפקודה הבאה כדי להפעיל אותם:

`npm test`

או

`yarn test`

בעת הפעלת `בדיקת npm` או` בדיקת חוטים` כל האלגוריתמים, הבדיקות והקובץ "./es5.js" מבוססים על קבצי ES6 + המתאימים להם. בדרך זו בעת הפעלת הבדיקות שלך לא רק אלגוריתמים ES6 + שלך נבדק בהקשר ES6 +, אבל אלגוריתמים ES5 transpiled נבדקים בהקשרים הבדיקה ES5 transpiled. מכיוון שמודולים בבדיקות נטענים באמצעות ".es.js" או קובץ transpiled ".es5.js", נבחנים גם קובצי הייצוא עצמם. בנוסף, [Standard](https://www.npmjs.com/package/standard) מופעל כדי לוודא שכל קוד ES6 + / ES5 תואם את הסגנון, ומבדיקות הבדיקה אם יש בעיות.

מאגר זה משתמש ב- [Travis-CI](https://travis-ci.org/sumtype/common-algorithms-js) לבדיקות הפריסה בגרסאות Node.js 10.15.x ו- 11.8.x. כיסוי כיסוי מדווח על ידי Coveralls. דוחות הבדיקה מופקים על ידי nyc.

## העברת אלגוריתמים ES5

ניתן גם להעביר את גרסאות ES5 של בדיקות ואלגוריתמים באופן ידני. לשם כך, הפעל:

`npm run transpile-es5`

או

`yarn transpile-es5`
