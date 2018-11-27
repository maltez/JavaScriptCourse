/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        if (num2 > 0) {
            let getModulus = num1 % num2;
            return (num1 / lowestMultiple(num1, getModulus) | 0 ) * num2;
        } else {
            return (num1 / lowestMultiple(num1, Math.abs(num1)) | 0 ) * num2;
        }
    } else {
        return false;
    }
};

module.exports = lowestMultiple;
