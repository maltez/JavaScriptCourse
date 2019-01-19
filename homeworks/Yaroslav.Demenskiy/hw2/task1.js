/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */

function stringBuilder(input) {
    if (typeof input === 'number') {
        
        let stringResult = '1';

        for (let i = 1; i !== input;) {
            input > 1 ? i++ : i--;
            stringResult += ',' + i;
        }

        return stringResult;
        
    } else {
        return 'Invalid data type.';
    }
};

console.log(stringBuilder(3));

module.exports = stringBuilder;