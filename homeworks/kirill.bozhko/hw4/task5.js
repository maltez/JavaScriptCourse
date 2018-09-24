/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {

    let newArr = arr.filter((num) => num === 0);
    let newArr1 = arr.filter((num1) => num1 != 0);

    return newArr1.concat(newArr);
}

module.exports = moveZeros;
