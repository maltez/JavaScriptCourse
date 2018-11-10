/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function isPositive(num) {
    return num >= 0;
}

function negativeFilter(arr) {

    var masPositive = [];
    for (var i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number' && isPositive(arr[i])) {
            masPositive.push(arr[i]);
        }
    }
    return masPositive;
}
// console.log(negativeFilter([1, -3, 0, 5, 'lol']));
module.exports = negativeFilter;