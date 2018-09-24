/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

 const commonDevisor = (num1, num2) => {

    let a = Math.abs(num1);
    let b = Math.abs(num2);

    while (a && b){ a > b ? a %= b : b %= a; }
        a += b;
     return a;
 };

 console.log(commonDevisor(-50, -120));

module.exports = commonDevisor;
