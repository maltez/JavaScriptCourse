/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */
const input1 = 924;
const input2 = 396;
 const commonDevisor = (num1, num2) => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) throw new Error('Error');
    return num1 ? commonDevisor(num2 % num1, num1) : num2;
 };
console.log(commonDevisor(input1,input2));
module.exports = commonDevisor;
