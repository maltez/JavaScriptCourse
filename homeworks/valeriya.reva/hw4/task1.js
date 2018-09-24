/**
 * Calculates Сommon Divisor
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
*/

const commonDevisor = (num1, num2) => {
    const arrNum = [num1, num2];
    let gcd = Math.abs(arrNum[0]);

    if (typeof num1 && typeof num2 !== 'number') {
        throw new TypeError('invalid value');
    }

    arrNum.forEach((item) => {
        let counterNum = Math.abs(item);

        while (gcd && counterNum) {
            if (gcd > counterNum) {
                gcd %= counterNum;
            } else {
                counterNum %= gcd;
            }
        }
        gcd += counterNum;
    });

    return gcd;
};

module.exports = commonDevisor;
