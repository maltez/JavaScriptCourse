/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let arrWithZeros = [];
  let arrWithoutZeros = [];
  arr.forEach(function(elem) {
    if (elem === 0) {
      arrWithZeros.push(elem);
    } else {
      arrWithoutZeros.push(elem);
    }
  });
  return arrWithoutZeros.concat(arrWithZeros);
};

module.exports = moveZeros;
