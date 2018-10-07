/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
   let Order;

    for (var i = 0; i < input.length; i += 1) {
        if (order) {
            Order = Order > input[i] ? Order : input[i]
        } else {
            Order = Order <= input[i] ? Order : input[i]
        }
    }

    return Order;
};

console.log(maxMin([11, 42, 52, 2, 1, 3, 5, 21, 25],0));

module.exports = maxMin;
