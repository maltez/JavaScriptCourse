/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    var notNullArr = [];
    var nullArr = [];
    for (var i = 0; i < input.length; i++) {
       if (input[i] !== 0) {
           notNullArr.push(input[i]);
        } else {
            nullArr.push(0);
        }
    }
    var filteredArr = notNullArr.concat(nullArr);
    return filteredArr;
}

module.exports = moveZeros;