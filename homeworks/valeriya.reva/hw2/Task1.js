/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */

function stringBuilder(input) {
    var stringAllNum = '';

    if (typeof(input) == 'number') {
        if (input < 0){
            for (var i = 1; i >= input; i--) {
                stringAllNum += i + ',';
            }
        } else {
            for (var i = 1; i <= input; i++) {
                stringAllNum += i + ',';
            }
        };
    } else {
        return;
    }

    return stringAllNum;
}

module.exports = stringBuilder;

