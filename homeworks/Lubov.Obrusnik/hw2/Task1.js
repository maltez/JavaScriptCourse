/*
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {

    if (typeof (input) == 'number') {

        let str = '';
        if (input >= 1) {
            for (let i = 1; i <= input; i = i + 1) {
                str += i + ',';
            }
            console.log(str);
        }
        if (input < 1) {
            for (let i = 1; i >= input; i = i - 1) {
                str += i + ',';
            }
            console.log(str);
        }
    } else {
        console.log('Wow, it`s not number');
    }

};
// stringBuilder();
module.exports = stringBuilder;