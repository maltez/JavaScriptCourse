/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {

    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return false;
    }

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    let mult = num1;

    while (mult % num2 != 0){

        mult += num1;

    } return mult;
 }

module.exports = lowestMultiple;


