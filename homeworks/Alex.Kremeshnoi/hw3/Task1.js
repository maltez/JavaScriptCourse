/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */
function isPositive(num) {
    if (num > 0) {
        return true
    } else {
        return false
    }
}

function negativeFilter(input) {
    const arr = [];
    input.forEach(function(element) {
        if (isPositive(element)) {
            return arr.push(element)
        }
    })
    return arr
}

module.exports = negativeFilter;
