/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
    var gcd = function(a, b) {
        if ( ! b) {
            return a;
        }
     return gcd(b, a % b);
    };
    return gsd (num1, num2);
};

module.exports = commonDevisor;
