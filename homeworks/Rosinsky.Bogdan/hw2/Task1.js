/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {

    //if input argument is not number then finished program
    if (typeof input !== 'number' || isNaN(input)) return;

    let str = '';
    //from 1 to n
    if (input >= 1) {
        for (let i = 1; i <= input; i++) {
            i === input ? str += i : str += i + ',';
        }
    }
    //from 1 to -n
    if (input < 1) {
        for (var j = 1; j >= input; j--) {
            j === input ? str += j : str += j + ',';
        }
    }

    return str;

};

module.exports = stringBuilder;