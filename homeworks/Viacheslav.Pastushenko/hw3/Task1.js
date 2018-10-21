/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function isPositive(number) {
    return number >= 0;
} 

function negativeFilter(input) {

    const onlyPositiveNumbers = [];

    for (let i = 0; i < input.length; i += 1) {
        if (isPositive(input[i])) {
            onlyPositiveNumbers.push(input[i]);
        }
    }

    return onlyPositiveNumbers;
}

module.exports = negativeFilter;
