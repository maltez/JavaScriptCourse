/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    var outString = '';
    var comma = ","
    if (typeof (input) != 'number') {
        return false; 
        }
    else {
        if(input >= 1){
            for ( var i = 1; i <= input; i++) {
                if (i < input) {
                    outString += i + comma;   
                } else {
                    outString += i;
                }
            }
        }
        if(input < 1){
            for ( i = 1; i >= input; i--) {
                if (i > input) {
                    outString += i + comma;
                } else {
                    outString += i;
                }
            }
        }
    }
    return outString;
}
module.exports = stringBuilder;