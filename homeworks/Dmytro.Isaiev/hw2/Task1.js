/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    if (typeof input != 'number') {
        return 'data is not valid';
    }

    var result = '';

    function funcWhilePlus(input) {
        for (var i = 1; i <= input; i++) {
           result += i + ((i < input) ? ',' : '');
        }
    }
    
    function funcWhileMinus(input) {
        for (var i = 1; i >= input; i--) {
            result += i + ((i > input) ? ',' : '');
        }
    }
    
    if (input > 1) {
        funcWhilePlus(input); 
    }
    else {
        funcWhileMinus(input); 
    }

    return result;
}



module.exports = stringBuilder;





