/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    if (typeof num1 !== 'number' && num2 !== 'number') {
        return false;
    }
    const a = num1;
    const b = num2;
    for (let i = 0; i < ((a * b) + 1); i += 1) {
        if (i % b === 0 && i % a === 0) {
            if (i !== 0) {
                return i;
            }
        }
    }
    return false;
};


module.exports = lowestMultiple;
