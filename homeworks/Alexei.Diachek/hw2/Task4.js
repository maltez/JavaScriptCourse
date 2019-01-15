/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
  let result = false;
  if (typeof first !== 'number' || typeof second !== 'number') {
    return false;
  }
  if (first % second) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

module.exports = isDevided;
