/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function isNumberInRange(num) {
    return (num > 0) && (num < 10);
}

function advancedFilter(input) {
    const newArray = [];
    if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i += 1) {
            if (!Number.isInteger(input[i])) {
                throw new Error('error');
            }
            if (isNumberInRange(input[i])) {
                newArray.push(input[i]);
            }
        }
        return newArray;
    }
    throw new Error('error');
}

module.exports = advancedFilter;
