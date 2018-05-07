/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

const moveZeros = function (arr) {
    const result = [];
    const resultZero = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
        } else {
            resultZero.push(0);
        }
    }
    return result.concat(resultZero);
};


module.exports = moveZeros;
