/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    if (typeof input === 'number') {
        var str = '';
        if (input > 0) {
            // От 1 до n.
            for (var i = 1; i <= input; i++) {
                i === input ? str += i : str += i + ',';
            }
        } else {
            // От 1 до -n.
            for (var j = 1; j >= input; j--) {
                j === input ? str += j : str += j + ',';
            }
        }
        return str;
    } else {
        return 'variable is not a number!';
    }
};

module.exports = stringBuilder;