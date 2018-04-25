/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    var result;
    var arr = new Array();

    if(!Number.isInteger(input)) {
        return;
    }
    
    if (input >= 1) {
        for(var i = 1; i <= input; i++) {
            arr.push(i);
            result = arr.join(',');
        }
    } else if (input < 1) {
        for(var k = 1; k >= input; k--) {
            arr.push(k);
            result = arr.join(',');
        }
    }

    return result;
};

module.exports = stringBuilder;

