/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const input1 = 6;
const input2 = 8;

const lowestMultiple = (num1, num2) => {
   let min = 0;
   let max = 0;

   if (num1 > num2) {
       max = num1;
       min = num2;
    } else {
       max = num2;
       min = num1;
    }
};

console.log(lowestMultiple(input1, input2));

module.exports = lowestMultiple;
