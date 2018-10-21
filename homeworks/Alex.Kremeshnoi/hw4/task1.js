/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
    if (typeof num1 != 'number' && typeof num2 != 'number') {
        return false
    } else {
        var num1 = Math.abs(num1);
        var num2 = Math.abs(num2);
        if (num2 > 0) {
            var gcd = num1 % num2;
            return commonDevisor (num2, gcd);
        } else {
            return num1;
        }
    }
};

module.exports = commonDevisor;
