/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, 0];

// Check negative numbers
function isPositive(num) {
    if (typeof num === 'number') {
        return num >= 0;
    }
    throw new Error();
}

function negativeFilter(array) {
    const arr = [];

    for (let i = 0; i < array.length; i += 1) {
        if (isPositive(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr;
}

negativeFilter(input);

module.exports = negativeFilter;
