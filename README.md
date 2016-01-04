# array-merge-equal

Merge second array into the first array and overwrite equal elements

[![Build Status](https://travis-ci.org/micnews/array-merge-equal.svg)](https://travis-ci.org/micnews/array-merge-equal)

## Usage

```shell
npm install array-merge-equal
```

```js
var mergeEqual = require('array-merge-equal');

mergeEqual([
  { v: 1, i: 1 },
  { v: 2, i: 2 },
  { v: 3, i: 3 }
], [
  { v: 1, i: 4 },
  { v: 5, i: 5 }
], function (a, b) { return a.v === b.v; });

/* [
  { v: 1, i: 4 },
  { v: 2, i: 2 },
  { v: 3, i: 3 },
  { v: 5, i: 5 }
] */
```

### API

```js
mergeEqual(array1, array2, equalilyFunction);
```
