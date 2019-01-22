/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
  if (!Array.isArray(input)) {
    return false;
  }
  let sortedArray = input.sort((a, b) => b - a);
  let minNum = sortedArray[sortedArray.length - 1];
  let maxNum = sortedArray[0];
  return order ? maxNum : minNum;
};

module.exports = maxMin;
