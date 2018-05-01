/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    if (typeof num == 'number') {
        if (num < 0) {
            return;
        }
        var fact = 1;
        for (var i = 1; i <= num; i++) {
            fact = fact * i;
        }
        return fact;


    }


}

module.exports = factorial;
