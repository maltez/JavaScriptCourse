/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    if (typeof num != 'number' || num < 0) {
        return 'data is not valid';
    }

    var result = 1;
    for (var i = 1; i <= num; i++) {
        result = i * result;
    }

    return result;
}

module.exports = factorial;
