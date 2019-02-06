/**
 * Compare of two arrays
 * @param {Array<number>} num1
 * @param {Array<number>} num2
 * @returns {boolean} Compares arrays or not.
 */

const comp = (array1, array2) => {

  'use strict'

  if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length === 0 || array2.length === 0) {
    return false;
  } else {

    return array2.every(elem => {
      return array1.indexOf(Math.sqrt(elem)) != -1;
    })
  }
}

module.exports = comp


const comp = (array1, array2) => {

  'use strict'

  if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length === 0 || array2.length === 0) {
    return false;
  } else {
    let arrForComp = [];

    for (var i = 0; i < array2.length; i++) {
      arrForComp.push(Math.sqrt(array2[i]));
    }

    if (array1.sort().join(',') === arrForComp.sort().join(',')) {
      return true;
    } else {
      return false;
    }
  }
}