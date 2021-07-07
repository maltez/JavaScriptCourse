/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
    var min, max;
    function findMinOrMax (arr, bool) {
        min = arr[0];
        max = min;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min ) {
                min  = arr[i];
            }
            if (arr[i] > max) {
                max = arr [i];
            }
        }
        if (bool === true) {
           return (max);
        } else {
            return (min);
        }
    }
    return findMinOrMax(input, order);
};

module.exports = maxMin;