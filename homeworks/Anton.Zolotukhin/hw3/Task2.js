/**
* Filter array. Only numbers that greater than 0 and less then 10 pass to result.
* @param {Array<number>} input
* @returns {Array<number>} Returns filtered array.
*/
function advancedFilter(input) {
    var arrayInRange = [];
    for (var item of input) {
        if (isNumberInRange(item)) {
            arrayInRange.push(item);
        }
    }
    return arrayInRange;
}

function isNumberInRange(digit) {
    return (digit > 0 && digit < 10) ? true : false
}

module.exports = advancedFilter;
