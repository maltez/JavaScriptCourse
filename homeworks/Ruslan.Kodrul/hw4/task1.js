/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {

    var absNum1 = Math.abs(num1);
    var absNum2 = Math.abs(num2);

    while (absNum1 && absNum2){
        absNum1 > absNum2 ? absNum1 %= absNum2 : absNum2 %= absNum1; 
    }

    absNum1 += absNum2;

    return absNum1;
     
};

module.exports = commonDevisor;