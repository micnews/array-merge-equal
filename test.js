var test = require('tape');
var mergeEqual = require('./');

test('basic merge', function (t) {
  var res = mergeEqual([
    { v: 1, i: 1 },
    { v: 2, i: 2 },
    { v: 3, i: 3 }
  ], [
    { v: 4, i: 4 },
    { v: 5, i: 5 }
  ], function (a, b) { return a.v === b.v; });

  t.deepEqual(res, [
    { v: 1, i: 1 },
    { v: 2, i: 2 },
    { v: 3, i: 3 },
    { v: 4, i: 4 },
    { v: 5, i: 5 }
  ]);

  t.end();
});

test('overwrite merge', function (t) {
  var res = mergeEqual([
    { v: 1, i: 1 },
    { v: 2, i: 2 },
    { v: 3, i: 3 }
  ], [
    { v: 1, i: 4 },
    { v: 5, i: 5 }
  ], function (a, b) { return a.v === b.v; });

  t.deepEqual(res, [
    { v: 1, i: 4 },
    { v: 2, i: 2 },
    { v: 3, i: 3 },
    { v: 5, i: 5 }
  ]);

  t.end();
});

test('overwrite merge keep duplicates in first', function (t) {
  var res = mergeEqual([
    { v: 1, i: 1 },
    { v: 2, i: 2 },
    { v: 3, i: 3 },
    { v: 3, i: 4 }
  ], [
    { v: 1, i: 5 },
    { v: 5, i: 6 }
  ], function (a, b) { return a.v === b.v; });

  t.deepEqual(res, [
    { v: 1, i: 5 },
    { v: 2, i: 2 },
    { v: 3, i: 3 },
    { v: 3, i: 4 },
    { v: 5, i: 6 }
  ]);

  t.end();
});

test('overwrite merge ignore duplicates in second', function (t) {
  var res = mergeEqual([
    { v: 1, i: 1 },
    { v: 2, i: 2 },
    { v: 3, i: 3 }
  ], [
    { v: 1, i: 4 },
    { v: 5, i: 5 },
    { v: 5, i: 6 }
  ], function (a, b) { return a.v === b.v; });

  t.deepEqual(res, [
    { v: 1, i: 4 },
    { v: 2, i: 2 },
    { v: 3, i: 3 },
    { v: 5, i: 5 }
  ]);

  t.end();
});
