/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    var result = 1;

    if (typeof num != 'number' || num < 0) {
        return;
    } else {
        for (var i = 1; i <= num; i++) {
            result *= i;
        }
    }

    return(result);
}

module.exports = factorial;
