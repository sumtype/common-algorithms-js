# Contribute

Welcome!  Please feel free to contribute algorithms, issues, fixes, and translations.

## Algorithms

There are a few steps to adding an algorithm to the repository.  Please remember that all JavaScript algorithm and test contributions must follow [JavaScript Standard Style](https://standardjs.com/) rules.  ES6+ code is suggested and fast implementations are preferable.

1) Please create your JavaScript algorithm file inside the [ES algorithms directory](https://github.com/sumtype/common-algorithms-js/tree/master/algorithms/es), following the camel-case naming convention used.  The file should follow the same layout conventions inside the other algorithm files and have a comment header explaining what the function does and what parameters it expects.

2) Add your algorithm export to [es.js](https://github.com/sumtype/common-algorithms-js/blob/master/es.js) following conventions used to add the others.  You need to add it to it's category object and export.  Please maintain alphabetized organization.

3) Create your algorithm's test file inside the [ES test directory](https://github.com/sumtype/common-algorithms-js/tree/master/test/es).  The file should be named exactly the same as it is in the algorithms directory, but with the suffix "Tests" added.  See the other tests for examples.  Your test file should follow the same layout conventions inside other test files.  There should be tests to cover success cases.  Failure and edge cases as well where appropriate.

4) Add your new algorithm to [README.md](https://github.com/sumtype/common-algorithms-js/blob/master/README.md) following the same conventions used to describe other algorithms.  If a new category of algorithms is necessary, add it following the same conventions as others.

5) **Optional** - Update the README.md files inside subfolders in the [locales directory](https://github.com/sumtype/common-algorithms-js/tree/master/locales) to include your new algorithm (translated appropriately).

6) If you didn't update the README.md files inside subfolders in the [locales directory](https://github.com/sumtype/common-algorithms-js/tree/master/locales), create an issue that specifies locale translations for your new algorithm need to be added.

7) Run `yarn test` or `npm test` to generate the ES5 algorithm versions, updated es5.js file, ES5 test files, find and fix any JavaScript Standard Styling errors, and see your test's coverage stats.  Once you're tests are passing and you've gotten good coverage on your ES algorithm version (>95%, ideally 100%) you're ready to make your commit and pull request.  High test coverage on the ES5 algorithm may not be possible given the testing environment and changes made during the transpiling process.

7) Create a pull request from your fork to the master branch following the [pull request template](https://github.com/sumtype/common-algorithms-js/blob/master/PULL_REQUEST_TEMPLATE.md) guidelines.

## Issues

Please format issues according to the [issues template](https://github.com/sumtype/common-algorithms-js/blob/master/ISSUE_TEMPLATE.md).

## Fixes

Please format pull requests for fixes according to the [pull request template](https://github.com/sumtype/common-algorithms-js/blob/master/PULL_REQUEST_TEMPLATE.md).

## Translations

To add a translation create a new directory following [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) naming conventions.  Inside the directory create a README.md file.  The README.md file should imitate the English [README.md](https://github.com/sumtype/common-algorithms-js/blob/master/README.md) file precisely in formatting and accurately in content in the translated language.  Once your translation is ready and/or you're done making changes to existing translations, create a pull request following the [pull request template](https://github.com/sumtype/common-algorithms-js/blob/master/PULL_REQUEST_TEMPLATE.md) to the master branch from your fork.
