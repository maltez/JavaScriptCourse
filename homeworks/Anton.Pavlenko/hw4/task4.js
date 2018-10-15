/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = false) => {

    if(order){
    return Math.max.apply(null,input);
    }
    if(!order)
    return Math.min.apply(null,input);
};

var arrNum=[3,-6,34,7,23,25,493,56,8,5,335];
console.log(maxMin(arrNum));

module.exports = maxMin;
