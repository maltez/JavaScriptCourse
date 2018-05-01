/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    var result = num;

    if(Number.isInteger(num)) {

        if (num < 0) {
            return;

        } else if (num === 0) {
            return 1;
        }
    
        for (var i = num - 1; i >= 1; i--) {
            result *= i;
        }

        return result;
    }

    return;
}

module.exports = factorial;
