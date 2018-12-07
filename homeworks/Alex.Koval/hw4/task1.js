/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
    if (! num2) {
        return num1;
    }
    return commonDevisor(num2, num1 % num2);
};

module.exports = commonDevisor;


