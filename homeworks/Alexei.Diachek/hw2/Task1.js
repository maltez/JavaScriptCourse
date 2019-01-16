/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
  // Output starts from startPoint
  let startPoint = 1;
  let result = '' + startPoint;

  if (typeof input !== 'number') {
    return false;
  }

  if (input > startPoint) {
    while (startPoint < input) {
      startPoint += 1;
      result += ', ' + startPoint;
    }
  } else {
    while (startPoint > input) {
      startPoint -= 1;
      result += ', ' + startPoint;
    }
  }
  return result;
}
module.exports = stringBuilder;
