/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function negativeFilter(array) {
    const newArr = [];

    function isPositive(number) {
        return number >= 0;
    }

    for (let i = 0; i < array.length; i += 1) {
        if (isPositive(array[i])) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

module.exports = negativeFilter;
