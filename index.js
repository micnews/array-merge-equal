'use strict';

function findEqual (a, elem, fnEqual) {
  for (var i = 0; i < a.length; ++i) {
    if (fnEqual(a[i], elem)) {
      return a[i];
    }
  }

  return null;
}

function mergeEqual (a1, a2, fnEqual) {
  var result = [];
  for (var i = 0, l = a1.length; i < l; ++i) {
    var res = findEqual(a2, a1[i], fnEqual);
    if (res) {
      result.push(res);
    } else {
      result.push(a1[i]);
    }
  }

  for (var j = 0, k = a2.length; j < k; ++j) {
    if (!findEqual(result, a2[j], fnEqual)) {
      result.push(a2[j]);
    }
  }

  return result;
}

module.exports = mergeEqual;
