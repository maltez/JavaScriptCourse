/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    var newArr = [];
    var zeroArr = [];
     for (var i = 0; i < arr.length; i += 1) {
         if (arr[i] === 0) {
             zeroArr.push(arr[i]);
         } else {
             newArr.push(arr[i]);
         }
     } for (var i = 0; i < zeroArr.length; i += 1) {
         newArr.push(zeroArr[i]);
     } return newArr
 }

module.exports = moveZeros;
