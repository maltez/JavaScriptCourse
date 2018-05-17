/**
 * Calculates Сommon Divisor
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
    let x = num1;
    let y = num2;
    while (y !== 0);
    y = x % (x = y);
    return x;
};
module.exports = commonDevisor;
