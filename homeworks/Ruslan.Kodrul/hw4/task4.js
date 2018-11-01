/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {

    function compareNumeric(a, b) {
        return a - b;
    }

    input.sort(compareNumeric);
    
    var minValue = input[0];
    var maxValue = input[input.length - 1];
    
    if (order){
        return minValue;
    } else {
        return maxValue;
    }
};

module.exports = maxMin;