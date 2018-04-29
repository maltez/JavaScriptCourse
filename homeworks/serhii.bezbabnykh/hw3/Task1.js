/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function negativeFilter(input) {
    var newarray = [];
    var error = 'Error';

    for (i=0; i < input.length; i++) {
        if (typeof input[i] != 'number') {
            return error;
        } else if (isPositive(input[i])) {
            newarray.push(input[i]);
        }
    }

    return newarray;
}

function isPositive(number) {
    return number >= 0;
}


module.exports = negativeFilter;