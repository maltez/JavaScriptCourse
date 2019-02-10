/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
    let dev1 = [];
    for(let i = 1; i < num1; i++){
        if(num1 % i == 0 && num2 % i == 0) {
            dev1.push(i);
        }
    }
    let devisor = dev1[dev1.length-1];
    return devisor;
}
console.log(commonDevisor(396, 924));
module.exports = commonDevisor;