/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
  if (typeof num !== 'number' || num < 0) {
    return false;
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

module.exports = factorial;
