/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {

    if ((typeof input) !== 'number') {
        return;
    }
    var string = '1';

    if (input > 1) {
        for (var i = 2; i <= input; i += 1) {
            string += ',';
            string += i;
        }
        return string;
    } else if (input < 1) {
        for (var i = 0; i >= input; i -= 1) {
            string += ',';
            string += i;
        }
        return string;
    }
    else {
        return string;
    }
};w

console.log(stringBuilder(3));
console.log(stringBuilder('sda'));
console.log(stringBuilder(-3));
console.log(stringBuilder(0));
console.log(stringBuilder(1));
console.log(stringBuilder(true));


//module.exports = stringBuilder;

