var unshift = function(arr) {
  'use strict';
  if (!Array.isArray(arr)) {
    return false;
  }
  for (let i = arguments.length - 1; i > 0; i--) {
    for (let k = arr.length - 1; k >= 0; k--) {
      arr[k + 1] = arr[k];
    }
    arr[0] = arguments[i];
  }
  return arr.length;
};
