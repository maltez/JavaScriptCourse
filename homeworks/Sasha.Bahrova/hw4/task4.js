/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
    let arr=input;
    let largest = Math.max.apply(Math, arr);
    let smallest = Math.min.apply(Math, arr);
    if (order){
      return largest;
    }else{
      return smallest;
    }
};
module.exports = maxMin;
