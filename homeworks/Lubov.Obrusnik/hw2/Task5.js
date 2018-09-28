/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    return num ? num * factorial(num - 1) : 1;
}

// factorial();
module.exports = factorial;
