/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
*/

const commonDevisor = (num1, num2) => {
    if (num1 % num2 == 0) {
        return num2;
    } else {
        return commonDevisor(num2, num1 % num2);
    }
}

// commonDevisor (18, 48);

module.exports = commonDevisor;
    