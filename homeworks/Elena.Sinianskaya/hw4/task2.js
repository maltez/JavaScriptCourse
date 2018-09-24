/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const commonDevisor = (num1, num2) => {
    let x = num1;
    let y = num2;
    while (y !== 0) y = x % (x = y);
    return x;
};
const lowestMultiple = (num1, num2) => {
    const x = num1;
    const y = num2;
    return x * (y / commonDevisor(x, y));
};

module.exports = lowestMultiple;
