/**
 * Calculates Сommon Divisor
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const a = 100;
const b = 30;

const commonDevisor = (number1, number2) => {
    let num1 = number1;
    let num2 = number2;
    while (num1 !== num2) {
        if (num1 > num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
    }
    return num1;
};

commonDevisor(a, b);

module.exports = commonDevisor;
