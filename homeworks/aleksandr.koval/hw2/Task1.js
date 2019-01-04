/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    if (typeof input === "string") {
        return;
    } else if (input < 0) {
        var result = '';
        for (var i = 1; i >= input; i--) {
        result += i + ', ';
        }
        return result;
    } 
}
module.exports = stringBuilder;

