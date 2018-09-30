/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    var x = 1;
    while(num) x *= num--;
    return x;
}

module.exports = factorial;

