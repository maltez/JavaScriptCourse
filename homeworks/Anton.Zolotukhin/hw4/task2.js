/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

// Auxillary function to calculate the biggest common divisor. Was created in task 1.
const commonDevisor = (num1, num2) => {
    if (num1 % num2 == 0) {
        return num2;
    } else {
        return commonDevisor(num2, num1 % num2);
    }
}

// lowest common multiple uses the auxillary function in calculations
const lowestMultiple = (num1, num2) => {
    return num1 * num2 / commonDevisor(num1, num2);
}

// lowestMultiple(8, 74);

module.exports = lowestMultiple;
