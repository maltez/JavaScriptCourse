/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    var newStr = '';
    if (typeof input !== 'number') {
        return false
    } else if (input >= 1) {
        for (var i = 1; i <= input; i += 1) {
           newStr += i + ',';
        } return newStr.substring(0, newStr.length -1)
    } else if (input <= 1) {
        for (var i = 1; i >=input; i -=1) {
            newStr += i + ',';
        } return newStr.substring(0, newStr.length -1)
    }
};

module.exports = stringBuilder;

