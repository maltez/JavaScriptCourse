/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {

    var zerosArray = [];
    var numberArray = [];

    for (var i = 0; i < arr.length; i += 1){
        if (arr[i] === 0){
            arr[i] = zerosArray[i];
        } else {
            arr[i] = numberArray[i];
        }
    }

    var moveZerosArray = numberArray.concat(zerosArray);

    return moveZerosArray;
}

module.exports = moveZeros;