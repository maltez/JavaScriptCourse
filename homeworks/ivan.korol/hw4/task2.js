/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */
const lowestMultiple = (num1, num2) => {
    let result = 0;
    function getDevisor() {
        while (num1 !== 0 && num2 !== 0) {
            num1 > num2 ? num1 %= num2 : num2 %= num1; 
        }
        return num1 + num2;
    }
    result = (num1 * num2) / getDevisor(num1, num2);
    return result;
};
module.exports = lowestMultiple;
