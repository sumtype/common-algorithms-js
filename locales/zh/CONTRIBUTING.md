＃贡献

欢迎！请随时提供算法，问题，修复和翻译。

## 算法

将算法添加到存储库有几个步骤。请记住，所有JavaScript算法和测试贡献必须遵循[JavaScript标准样式](https://standardjs.com/)规则。建议使用ES6 +代码，最好快速实现。

1）请根据所使用的驼峰式命名约定，在[ES算法目录](https://github.com/sumtype/common-algorithms-js/tree/master/algorithms/es)中创建JavaScript算法文件。该文件应遵循其他算法文件中相同的布局约定，并有一个注释标题，说明该函数的作用以及它所期望的参数。

2）按照用于添加其他的约定，将算法导出添加到[es.js](https://github.com/sumtype/common-algorithms-js/blob/master/es.js)。您需要将其添加到其类别对象并导出。请维护按字母顺序排列的组织。

3）在[ES测试目录](https://github.com/sumtype/common-algorithms-js/tree/master/test/es)中创建算法的测试文件。该文件的名称应与算法目录中的文件完全相同，但添加了后缀“Tests”。有关示例，请参阅其他测试。您的测试文件应遵循其他测试文件中的相同布局约定。应该进行测试以涵盖成功案例。失败和边缘情况以及适当的情况。

4）按照用于描述其他算法的相同约定，将新算法添加到[README.md](https://github.com/sumtype/common-algorithms-js/blob/master/README.md)。如果需要新类别的算法，请按照与其他算法相同的约定添加它。

5）**可选** - 更新[locales目录](https://github.com/sumtype/common-algorithms-js/tree/master/locales)子文件夹中的README.md文件以包含新算法（适当翻译）。

6）如果您没有更新[locales目录](https://github.com/sumtype/common-algorithms-js/tree/master/locales)中子文件夹中的README.md文件，请创建一个指定的问题需要添加新算法的区域设置翻译。

7）运行`yarn test`或`npm test`生成ES5算法版本，更新es5.js文件，ES5测试文件。查找并修复任何JavaScript标准样式错误（如果没有任何测试不会中断并将继续运行Mocha / Chai测试用例）。查看测试的覆盖率统计信息。一旦你的测试通过，你已经很好地覆盖了你的ES算法版本（> 95％，理想情况下是100％），你就可以进行提交和拉取请求了。考虑到测试环境和在转换过程中所做的更改，ES5算法的高测试覆盖率可能是不可能的。

7）根据[pull request template](https://github.com/sumtype/common-algorithms-js/blob/master/PULL_REQUEST_TEMPLATE.md)指南，从fork到master分支创建一个pull请求。

## 问题

请根据[问题模板](https://github.com/sumtype/common-algorithms-js/blob/master/ISSUE_TEMPLATE.md)格式化问题。

## 修复

请根据[拉取请求模板](https://github.com/sumtype/common-algorithms-js/blob/master/PULL_REQUEST_TEMPLATE.md)格式化修复请求。

## 翻译

要添加翻译，请按照[ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)命名约定创建新目录。在目录中创建一个README.md文件。 README.md文件应该在格式化中准确模仿英语[README.md](https://github.com/sumtype/common-algorithms-js/blob/master/README.md)文件并准确地在翻译的内容中语言。一旦您的翻译准备就绪和/或您已完成对现有翻译的更改，请在[拉取请求模板](https://github.com/sumtype/common-algorithms-js/blob/master/PULL_REQUEST_TEMPLATE.md)之后创建拉取请求从你的fork到master分支。