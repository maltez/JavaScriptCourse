/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

const moveZeros = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Error');
    }
    const ZeroArray = arr.filter(item => item === 0);
    const noZeroArray = arr.filter(item => item !== 0);
    return noZeroArray.concat(ZeroArray);
};

module.exports = moveZeros;
