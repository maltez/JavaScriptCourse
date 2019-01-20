/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {

    let string = "";

    if (typeof(input) !== 'number'){
        return 'The value you entered in not a number, please enter a number';
    }

    if (input > 0){
        for (var i = 1; i <= input; i++){
            string += i + ',';
        }
        
    } else {
        for (var i = 1; i >= input; i--){
            string += i + ',';
        }
    }

    // To remove the last character of a string ','

    string = string.slice(0, -1)
    
    return string;
} 

module.exports = stringBuilder;

