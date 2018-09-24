/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function zero(arr) {
    const numberArr = arr.filter(number => number !== 0);
    const zeroArr = arr.filter(number => number === 0);
    const newArr = numberArr.concat(zeroArr);
    return newArr;
};

module.exports = moveZeros;
