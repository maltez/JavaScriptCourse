/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    var stringAllNum = input;

    if (typeof(input) == 'number') {
        if (input < 0){
            for (var i = input + 1; i <= 1; i++) {
                stringAllNum = i + ','+ stringAllNum;
            }
        } else {
            for (var i = input - 1; i >= 1; i--) {
                stringAllNum = i + ','+ stringAllNum;
            }
        };
    } else {
        return;
    }
    return stringAllNum;
}

module.exports = stringBuilder;

