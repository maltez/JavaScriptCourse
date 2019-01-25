var push = function(arr) {
  'use strict';
  if (!Array.isArray(arr)) {
    return false;
  }
  let len = arr.length;
  for (let i = 1; i < arguments.length; i++) {
    arr[len] = arguments[i];
    len += 1;
  }
  return arr.length;
};
