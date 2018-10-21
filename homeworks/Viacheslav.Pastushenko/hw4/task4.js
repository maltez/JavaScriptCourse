/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
    
    if (order) {

        let inputItem = input[0];

        for (let i = 0; i < input.length; i += 1) {
            if (inputItem < input[i]) {
                inputItem = input[i];
            }
        }

        return inputItem;

    } else {

        let inputItem = input[0];

        for (let i = 0; i < input.length; i += 1) {
            if (inputItem > input[i]) {
                inputItem = input[i];
            }
        }

        return inputItem;
    }
};

module.exports = maxMin;
