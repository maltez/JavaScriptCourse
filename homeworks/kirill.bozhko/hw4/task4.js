/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {

    function maxNum (input) {

        let item = input[0];

        for (let i = 0; i < input.length; i++) {
            if (item < input[i]){
                item = input[i];
            }
        }
        return item;
    }

    function minNum (input) {
        let item = input[0];

        for (let k = 0; k < input.length; k++){
            if (item > input[k]) {
                item = input[k];
            }
        }
        return item;
    }
    return order ? maxNum (input) : minNum (input);
};

module.exports = maxMin;
