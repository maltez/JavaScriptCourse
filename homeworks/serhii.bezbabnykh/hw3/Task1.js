/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */


function isPositive(num) {
    return num >= 0;
}

function negativeFilter(input) {
    const newArray = [];
    if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i += 1) {
            if (!Number.isInteger(input[i])) {
                throw new Error('error');
            }
            if (isPositive(input[i])) {
                newArray.push(input[i]);
            }
        }
        return newArray;
    }
    throw new Error('error');
}

module.exports = negativeFilter;
