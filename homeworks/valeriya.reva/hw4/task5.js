/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('invalid value');
    }

    arr.forEach((item, i) => {
        if (item === 0) {
            arr.splice(i, 1);
            arr.push(item);
        }
    });

    return arr;
};

module.exports = moveZeros;
