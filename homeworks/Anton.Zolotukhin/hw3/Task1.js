/**
* Filter negative numbers from array
* @param {Array<number>} input
* @returns {Array<number>} Returns array that contains positive numbers only.
*/
function negativeFilter(input) {
  var arrayOfPositives = [];
  for (var item of input) {
    if (isPositive(item)) {
      arrayOfPositives.push(item);
    }
  }
  return arrayOfPositives;
}

function isPositive(digit) {
  return (digit > 0) ? true : false
}

module.exports = negativeFilter;