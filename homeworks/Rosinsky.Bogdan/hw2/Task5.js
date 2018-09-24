/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    // Check for a number.
    if (typeof num === 'number') {
        // If the number is negative then exit the function.
        if (num < 0) {
            return;
        }

        var factorial = 1;
        // Factorial calculations.
        while (num >= 1) {
            factorial *= num--;
        }
        return factorial;
    } else {
        return;
    }
}

module.exports = factorial;
