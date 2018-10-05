/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(arr) {

    var mas2 = [];
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] >= 0) {
            mas2.push(arr[i]);
        }
    }
    return mas2;
}
// console.log(negativeFilter([1, -3, 0, 5, -7]));
module.exports = negativeFilter;