/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    if (num < 0) {
        return;
    }

    var factorial = 1;

    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
module.exports = factorial;
