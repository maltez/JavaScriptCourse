/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
var moveZeros = function (arr) {

    for (var i = 0, n = arr.length; i < n;) {

        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
            n -= 1;
        } else {
            i += 1;
        }
    }
    return arr;
};

// console.log(moveZeros([9, 1, 0, 0, 9, 87, 4]));
module.exports = moveZeros;