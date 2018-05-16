/**
 * Calculates Сommon Divisor
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

 const commonDevisor = (num1, num2) => {
     if(num2>0){
       let k = num1%num2;
       return commonDevisor(num2,k);
     }else{
       return Math.abs(num1);
     }
 };

module.exports = commonDevisor;
