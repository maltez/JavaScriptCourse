/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

function commonDevisor(number1, number2) {
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
}

function lowestMultiple(num1, num2) {
    return ((num1 * num2) / (commonDevisor(num1, num2)));
}

lowestMultiple(6, 8);

module.exports = lowestMultiple;
