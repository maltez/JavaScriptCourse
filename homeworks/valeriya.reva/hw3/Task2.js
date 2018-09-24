/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

function isNumberInRange(num) {
    return num > 0 && num < 10;
}

function advancedFilter(input) {
    const arrResult = [];

    if (!Array.isArray(input)) {
        throw new TypeError('invalid value');
    }
    input.forEach((item) => {
        if (isNumberInRange(item)) {
            arrResult.push(item);
        }
    });
    return arrResult;
}

module.exports = advancedFilter;

