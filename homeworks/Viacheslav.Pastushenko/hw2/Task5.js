/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    if (typeof num === 'number' && num > 0) {

        var getFactorial = 1;

        for (var counter = 1; counter <= num; counter += 1) {
            getFactorial *= counter;
        }
        return getFactorial;
    } else {
        return false;
    }
}

module.exports = factorial;
