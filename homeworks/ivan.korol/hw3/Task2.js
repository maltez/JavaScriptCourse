/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function isNumberInRange(num) {
    return num > 0 && num < 10;
}

function advancedFilter(input) {
    var newArray = [];

    if (Array.isArray()) {

        for (let i = 0; i < input.length; i++) {

            if (!Number.isInteger(input[i])) {
                return;
            }
        
            if (isNumberInRange(input[i])) {
                newArray.push(input[i]);
            }
        }

        return newArray;
    }

    return;
}

module.exports = advancedFilter;
