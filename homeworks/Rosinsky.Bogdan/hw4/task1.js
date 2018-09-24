/**
 * Calculates Сommon Divisor.
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    if (num1 === 0) {
        return num2;
    }
    let a = num1;
    let b = num2;
    while (b !== 0) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return a;
};

module.exports = commonDevisor;
