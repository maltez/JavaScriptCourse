/**
 * Calculates Сommon Divisor
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  let minNum = num1 > num2 ? num2 : num1;
  let maxNum = num1 < num2 ? num2 : num1;
  let count = minNum;
  if (maxNum % minNum === 0) {
    return minNum;
  }
  while (count > 1) {
    count -= 1;
    if (maxNum % count === 0 && minNum % count === 0) {
      return count;
    }
  }
};
console.log(commonDevisor(6, 8));
module.exports = commonDevisor;
