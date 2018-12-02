/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */


function factorial(num) {
   if (typeof(num) == 'number') {
      if (num < 1) {
         return 'Input bigger data';
      } else if (num == 1) {
         return 1;
      } else {
         return num * factorial(num - 1);
      }
   }else {
      return 'Not a number';
   }
 }
 console.log(factorial(5));
 module.exports = factorial;
 