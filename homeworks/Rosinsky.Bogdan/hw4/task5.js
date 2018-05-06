/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function filterZeros(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The argument must be an array!');
    }
    const zero = arr.filter(item => item === 0);
    const noZero = arr.filter(item => item !== 0);
    return noZero.concat(zero);
};

module.exports = moveZeros;
