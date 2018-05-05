/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function isPositive(num) {
    return num >= 0;
}

function negativeFilter(input) {
    const err = 'Type error';
    if (!Array.isArray(input)) {
        throw err;
    }

    const positiveNumbers = [];
    const len = input.length;
    for (let i = 0; i < len; i += 1) {
        if (typeof input[i] !== 'number') {
            throw err;
        }

        if (isPositive(input[i])) {
            positiveNumbers.push(input[i]);
        }
    }
    return positiveNumbers;
}

module.exports = negativeFilter;
