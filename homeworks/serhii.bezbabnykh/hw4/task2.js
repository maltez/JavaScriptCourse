/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    function commonDevisor() {
        while (num1 !== 0 && num2 !== 0) {
            if (num1 > num2) {
                num1 %= num2;
            } else {
                num2 %= num1;
            }
        }

        const divider = num1 + num2;

        return divider;
    }

    const multiple = (num1 * num2) / commonDevisor(num1, num2);

    return multiple;
};

module.exports = lowestMultiple;
