/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */
const comp = (array1, array2) => {
  'use strict';
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  } else if (array1.length === 0 || array2.length === 0) {
    return 'You passed an empty array ';
  }
  return array2.every(e => {
    return array1.indexOf(Math.sqrt(e)) !== -1;
  });
};

module.exports = comp;
