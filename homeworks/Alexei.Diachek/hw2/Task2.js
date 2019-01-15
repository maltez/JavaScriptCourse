/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter(minute) {
  let quarterTime = 15;
  if (typeof minute !== 'number' || minute < 0 || minute > 59) {
    return false;
  }
  return Math.floor(minute / quarterTime + 1);
}

module.exports = hourQuoter;
