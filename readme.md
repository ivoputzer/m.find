m.find
===
**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[find](https://github.com/ivoputzer/m.find) is a lightweight find utility written in es6+**

[![travis](https://img.shields.io/travis/ivoputzer/m.find.svg?style=for-the-badge)](https://travis-ci.org/ivoputzer/m.find)
[![dependencies](https://img.shields.io/badge/dependencies-1-blue.svg?style=for-the-badge&colorB=44CC11)](package.json)
[![linter](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=for-the-badge)](http://standardjs.com/)
[![coverage](https://img.shields.io/coveralls/ivoputzer/m.find.svg?style=for-the-badge)](https://coveralls.io/github/ivoputzer/m.find?branch=master)

[![node](https://img.shields.io/badge/node-8%2B-blue.svg?style=for-the-badge)](https://nodejs.org/docs/v8.0.0/api)
[![version](https://img.shields.io/npm/v/m.find.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/m.find)
[![minzip](https://img.shields.io/bundlephobia/minzip/m.find.svg?style=for-the-badge)](https://www.npmjs.com/package/m.find)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&colorB=007EC6)](https://spdx.org/licenses/MIT)

### usage

> find(dirname, optioins)

```javascript
const {find} = require('m.find')

find(dirname, {
  filter (filename) {
    return /readme.md/.test(filename)
  }
})
```

### cli usage

```sh
m.find --show-hidden --filter "readme\.md"
```
