/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return(factorial);
}

factorial();

module.exports = factorial;
