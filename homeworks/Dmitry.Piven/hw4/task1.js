/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

 const commonDevisor = (num1, num2) => {
     if(typeof(num1) == "number" && typeof(num2) == "number")
     {
        if (num2 == 0)
            return num1;
        else
            return commonDevisor (num2, num1 % num2);
     }
     else
     {
         return;
     }
 };
//module.exports = commonDevisor;
