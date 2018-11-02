/**
 * Return the highest number
 * if second paraameter is trueand the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
    let result;
    if (!Array.isArray(input)) {
        throw new Error('Error');
    }

    if (order) {
        result = input.reduce((number, curr) => {
            let num = number;
            const current = curr;
            if (num < current) {
                num = current;
            }
            return num;
        });
    } else {
        result = input.reduce((number, curr) => {
            let num = number;
            const current = curr;
            if (num > current) {
                num = current;
            }
            return num;
        });
    }
    return result;
};

module.exports = maxMin;
