/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

function moveZeros(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Error');
    }
    const ZeroArr = arr.filter(item => item === 0);
    const noZeroArr = arr.filter(item => item !== 0);
    return noZeroArr.concat(ZeroArr);
}

module.exports = moveZeros;
