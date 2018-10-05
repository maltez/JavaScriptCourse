/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function isNumberInRange(num) {
    if (num > 0 && num < 10) {
        return true
    } else {
        return false
    }
}

function advancedFilter(input) {
    const arr = [];
    input.forEach(function(element) {
        if (isNumberInRange(element)) {
            return arr.push(element)
        }
    })
    return arr
}

module.exports = advancedFilter;
