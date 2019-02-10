/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
    var arr = input.sort(function(a, b) {
        return a - b;
    });

    if (order === true) {
        let max = arr[arr.length-1];
        return max;
    } else {
        return arr[0];
    }
};

console.log(maxMin([1,2,4,5,6,7,8,-2,12,0,2,12,-5,77,-10]));
module.exports = maxMin;
