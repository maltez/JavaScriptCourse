/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

function isNumberInRange(num) {
    return (num > 0) && (num < 10);
}

function advancedFilter(input) {
    const err = 'Type error';

    if (!Array.isArray(input)) throw err;

    const rangeOfNumbers = [];
    const len = input.length;

    for (let i = 0; i < len; i += 1) {
        if (typeof input[i] !== 'number') throw err;

        if (isNumberInRange(input[i])) {
            rangeOfNumbers.push(input[i]);
        }
    }

    return rangeOfNumbers;
}

module.exports = advancedFilter;
