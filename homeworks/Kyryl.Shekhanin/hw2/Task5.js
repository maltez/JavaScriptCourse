/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    if ((typeof num) !== 'number' || num < 0) {
        return;
    }
    var factor = 1;
    for (num; num > 1; num -= 1) {
        factor *= num;
    }
    return factor;
}

module.exports = factorial;
