/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    if (typeof(input) == "number") {
        var str = '';
        if (input < 1) {
            for (var i = 1; i >= input; i--) {
                str += i;
                if (i === input) {
                    break;
                }else{
                    str += ",";
                }
            }
        }else {
            for (var i = 1; i <= input; i++) {
                str += i;
                if (i === input) {
                    break;
                }else{
                    str += ",";
                }
            }
        }
        return str;
    }else {
        return 'Not a number';
    } 
};
console.log(stringBuilder(-20));
module.exports = stringBuilder;