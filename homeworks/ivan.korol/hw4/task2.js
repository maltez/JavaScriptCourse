/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */
const lowestMultiple = (num1, num2) => {
    let result = 0;
    let item1 = num1;
    let item2 = num2;
    function getDevisor() {
        while (item1 !== 0 && item2 !== 0) {
            if (item1 > item2) {
                item1 %= item2;
            } else {
                item2 %= item1;
            }
        }
        const sum = item1 + item2;
        return sum;
    }
    result = (item1 * item2) / getDevisor(item1, item2);
    return result;
};
module.exports = lowestMultiple;
