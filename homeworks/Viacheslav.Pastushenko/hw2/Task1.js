/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {

    if (typeof input === 'number') {

        var stringNumber = '';
        
        if (input > 1) {
            for (var counter = 1; counter <= input; counter += 1) {
                stringNumber += counter + ((counter < input) ? ',' : '');
            }
        } else if (input < 1) {
            for (var counter = 1; counter >= input; counter -= 1) {
                stringNumber += counter + ((counter > input) ? ',' : '');
            }
        }
        return stringNumber;
    } else {
        return false;
    }
};

module.exports = stringBuilder;
