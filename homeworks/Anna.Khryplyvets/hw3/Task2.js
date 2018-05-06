// Check if number > 0 and < 10

function isNumberInRange(num) {
    if (typeof num === 'number') {
        return (num > 0 && num < 10);
    }
    throw new Error();
}

var input = [1, -4, 5, 7, -11];

/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(inputs) {
    var arr = [];

    for (var i = 0; i < inputs.length; i += 1) {
        if (isNumberInRange(inputs[i])) {
            arr.push(inputs[i]);
        }
    }
    return arr;
}

advancedFilter(input);

module.exports = advancedFilter;
