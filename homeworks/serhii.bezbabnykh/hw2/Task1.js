/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    var result = '';

    if (isNaN(input)) {
        result = "This is string";
    } else {
        if (input > 0) {
            for( var i = 1; i <= input; i++) {
                result += i + ';';
            } 
        } else {
            for( var i = input; i <= 1; i++) {
                result += i + ',';
            } 
        }
    }

    // console.log(result);
    return(result);
};

// stringBuilder(-5);

module.exports = stringBuilder;

