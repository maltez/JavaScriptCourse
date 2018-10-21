/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

function isNumberInRange(number) {
    return (number > 0) && (number < 10);
}

function advancedFilter(input) {

    const numbersInRange = [];

    for (let i = 0; i < input.length; i += 1) {
        if (isNumberInRange(input[i])) {
            numbersInRange.push(input[i]);
        }
    }

    return numbersInRange;
}

module.exports = advancedFilter;
