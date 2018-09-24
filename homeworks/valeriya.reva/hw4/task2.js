/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    const arrNum = [num1, num2];
    let lcm = Math.abs(arrNum[0]);

    if (typeof num1 && typeof num2 !== 'number') {
        throw new TypeError('invalid value');
    }

    for (let i = 1; i < arrNum.length; i += 1) {
        let item = Math.abs(arrNum[i]);
        const firstItem = lcm;

        while (lcm && item) {
            if (lcm > item) {
                lcm %= item;
            } else {
                item %= lcm;
            }
        }

        lcm = Math.abs(firstItem * arrNum[i]) / (lcm + item);
    }

    return lcm;
};

module.exports = lowestMultiple;
