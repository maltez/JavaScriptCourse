/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {

    let arr1 = arr.filter((item) => item === 0);
    let arr2 = arr.filter((item2) => item2 != 0);

    return arr2.concat(arr1);
}

console.log(moveZeros([1, -20, 0, 0, 4, 0, 6, 0, 0]));

module.exports = moveZeros;
