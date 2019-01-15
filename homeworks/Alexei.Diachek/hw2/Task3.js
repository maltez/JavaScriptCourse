/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
  // seconds in one hour(60min * 60sec)
  let coef = 3600;
  if (typeof hours !== 'number') {
    return false;
  }
  return hours * coef;
}

module.exports = secondsCount;
