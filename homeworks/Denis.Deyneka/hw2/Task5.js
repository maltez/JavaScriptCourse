/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    var fac = 1;
    var i = 1;
    if (typeof(num) == 'number' && num >= 0) {
        while (i <= num) {
            fac *= i++;
        }
        return fac;
    } else {
        return false;
    }
}
module.exports = factorial;