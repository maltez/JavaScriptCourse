/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

 const commonDevisor = (num1, num2) => {
     if (num2 > 0) {
         let x = num1 % num2;
         return commonDevisor (num2, x);
     }
     else {
         return Math.abs (num1);
     }
 };
 

module.exports = commonDevisor;
