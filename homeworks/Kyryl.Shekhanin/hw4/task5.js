/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    var ZeroArray = [];
    var ResultArray = [];

    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] !== 0) {
            ResultArray.push(arr[i]);
        } else {
            ZeroArray.push(arr[i]);
        }
    }

    for (var i = 0; i < ZeroArray.length; i += 1) {
        ResultArray.push(ZeroArray[i]);
    }

    return ResultArray;
}

var arr = [11, 42, 0, 0, 52, 2, 0, 1, 3, 5, 21, 25]
console.log(moveZeros(arr));
module.exports = moveZeros;
