/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === 0) {
            arr.splice(arr[i], 1);
            arr.push(arr[i]);
        }
    }

    return arr;
}

module.exports = moveZeros;
