var pop = function(arr) {
  'use strict';
  if (!Array.isArray(arr) || arr.length < 1) {
    return false;
  }
  let deletedElem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return deletedElem;
};
