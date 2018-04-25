/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */

function factorial(num) {

    if (typeof(num) == 'number' && num >= 0) {

        return (num != 1) ? num * factorial(num - 1) : 1;

    } else {
        return 'enter another value';
    }

}

module.exports = factorial;