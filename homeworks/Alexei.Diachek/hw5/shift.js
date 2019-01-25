var shift = function(arr) {
  if (!Array.isArray(arr) || arr.length < 1) {
    return false;
  }
  let deletedElem = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length = arr.length - 1;
  return deletedElem;
};
