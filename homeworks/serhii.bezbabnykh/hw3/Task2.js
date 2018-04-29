/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
    var newarray = [];

    for (i=0; i < input.length; i ++) {
        if (typeof input[i] != 'number') {
            return;
        } else if (isNumberInRange(input[i])) {
            newarray.push(input[i]);
        }
    }

    return newarray;
}

function isNumberInRange(number) {
    return number > 0 && number < 10;
}

module.exports = advancedFilter;
