/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    var result = '';

    if (typeof input != 'number') {
        return;
    }

    if (input > 0) {
        for( var i = 1; i <= input; i++) {
            result += i + ',';
        } 
    } 

    if (input < 0) {
        for( var d = 1; d >= input; d--) {
            result += d + ',';
        } 
    } 

    // console.log(result);
    return(result);
};

// stringBuilder(6);

module.exports = stringBuilder;

