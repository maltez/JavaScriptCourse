/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {

    let del = [];
    for (let i = 0; i <= num1; i++) {
        for (let j = 0; j <= num2; j++) {
            if (num1 % i === 0 && num2 % j === 0 && j === i) {
                del.push(i);
            }
        }
    }

    let res = Math.max(...del);
    return res;
};

console.log(commonDevisor(668, 334));
module.exports = commonDevisor;