/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function zero(arr) {
    const numberArr = arr.filter(function first(number) {
        return number !== 0;
    });

    const zeroArr = arr.filter(function second(number) {
        return number === 0;
    });

    const newArr = numberArr.concat(zeroArr);
    return newArr;
};

module.exports = moveZeros;
