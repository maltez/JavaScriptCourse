/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {

    var line = '';
    var counter = 1;

    if (typeof input !== 'number') {
        return ('please, put a number');
    }

    if (input < 1) {

        //console.log('less than 1');

        while (counter >= input) {

            if (counter === input) {
                line = line + counter + '.';
            } else {
                line = line + counter + ', ';
            }

            counter = counter - 1;
        }

        return line;
    } else if (input > 1) {

        //console.log('more than 1');

        while (counter <= input) {
            if (counter === input) {
                line = line + counter + '.';
            } else {
                line = line + counter + ', ';
            }

            counter = counter + 1;
        }

        return line;

    } else {

        //console.log('1 - one');

        return 1;
    }

}

module.exports = stringBuilder;

