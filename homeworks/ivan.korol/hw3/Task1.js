/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */


function isPositive(num) {
    return num >= 0;
}

function negativeFilter(input) {
    var newArray = [];

    if (Array.isArray(input)) {

        for (let i = 0; i < input.length; i++) {

            if (!Number.isInteger(input[i])) {
                return false;
            }
    
            if (isPositive(input[i])) {
                newArray.push(input[i]);
            }
        }

        return newArray;
    }

    return false;
}

module.exports = negativeFilter;
