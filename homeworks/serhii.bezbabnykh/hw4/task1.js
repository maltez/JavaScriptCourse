/**
 * Calculates Сommon Divisor
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
    let a = num1;
    let b = num2;
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a %= b;
        } else {
            b %= a;
        }
    }

    const divider = a + b;

    return divider;
};

module.exports = commonDevisor;
