/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */

function factorial(num) {
    var result = 1;

    if (typeof(num) == 'number' && num >= 0) {
        for (i = 1; i <= num; i++) {
            result = result * i;
        }   
    } else {
        return;
    }

    return result;
}

module.exports = factorial;

