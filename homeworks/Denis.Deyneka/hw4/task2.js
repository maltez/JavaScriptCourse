/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    var gcd = function(a, b) {
        if ( ! b) {
            return a;
            }
        return gcd(b, a % b);
        };
    var lcm;         
    lcm = (num1 * num2) / gcd (num1, num2);
    return lcm;
};

module.exports = lowestMultiple;