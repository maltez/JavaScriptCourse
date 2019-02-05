/**
 * Sorts the array from the max value to the min value, using bubble sort
 * @param {Array<number>} arr
 * @returns {Array<number>} Sorted array.
 */

const bubbleSortMaxToMin = arr => {
  for (var j = 0; j < arr.length - 1; j++) {
    for (var i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};
/**
 *  Sorts the array from the min value to the max value, using bubble sort
 * @param {Array<number>} arr
 * @returns {Array<number>} Sorted array.
 */
const bubbleSortMinToMax = arr => {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
