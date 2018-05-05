/**
 * Calculates Сommon Divisor
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
    while (num1 !== 0 && num2 !== 0) {
        if (num1 > num2) {
            num1 %= num2;
        } else {
            num2 %= num1;
        }
    }

    const divider = num1 + num2;

    return divider;
};

module.exports = commonDevisor;
