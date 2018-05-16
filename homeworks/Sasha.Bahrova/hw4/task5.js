/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
  if (!Array.isArray(arr)) {
      throw new Error;
    let newArr =  arr.filter(item => item !== 0);
    let zeroArr = arr.filter(item => item === 0);
    return newArr.concat(zeroArr);
}

module.exports = moveZeros;
