/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order) => {

    if (typeof order != 'boolean') {
        return 'data is not valid';
    }

    function highNumber(input) {
        
        let result = input[0];
        let i;

        for (i = 0; i < input.length; i++){

            if (result < input[i]) {
                result = input[i];
            }
        } 
        return result;
    }

    function lowNumber(input) {

        let result = input[0];
        let j;

        for (j = 0; j < input.length; j++){

            if (result > input[j]) {
                result = input[j];
            }
        }
        return result;
    }
    return order ? highNumber(input) : lowNumber(input);
}
console.log(maxMin([1, 2, 3, -20, 5, 6, 7, 1128, 9], true));

module.exports = maxMin;
