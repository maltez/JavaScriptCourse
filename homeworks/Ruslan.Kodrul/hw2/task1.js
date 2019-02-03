/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    if ( typeof input !== 'number' || isNaN(input) ){
        return false;
    }

    var str = '';
    if ( input >= 1 ){
        for ( var i = 1; i <= input; i++){
            i === input ? str += i : str += i + ',';
        }
    }

    if ( input < 1 ){
        for ( var i = 1; i >= input; i--){
            i === input ? str += i : str += i + ',';
        }
    }
    return str;
};

module.exports = stringBuilder;
