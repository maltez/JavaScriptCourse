/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */

const maxMin = (input, order = true) => {
    if(order)
    {
        return Math.max.apply(null,input);
    }
    else
    {
        return Math.min.apply(null,input);
    }
};

module.exports = maxMin;
