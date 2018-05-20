/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const commonDevisor = (num1, num2) => {
    if (num2 > 0) {
        let x = num1 % num2;
        return commonDevisor (num2, x);
    }
    else {
        return Math.abs (num1);
    }
};

const lowestMultiple = (num1, num2) => {
    return (num1 / commonDevisor (num1, num2) | 0 ) * num2;
};

module.exports = lowestMultiple;
