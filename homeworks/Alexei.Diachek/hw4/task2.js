/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
  let minNum = num1 > num2 ? num2 : num1;
  let maxNum = num1 < num2 ? num2 : num1;
  //calculating start point for loop
  let count = minNum * Math.floor(maxNum / minNum);
  if (maxNum % minNum === 0) {
    return maxNum;
  }
  while (true) {
    if (count % maxNum === 0) {
      return count;
    }
    count += minNum;
  }
};
module.exports = lowestMultiple;
