/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
  if (typeof hours !== "number") {
      return;
  } else {
    var seconds = hours * 360;
    return seconds;
    }
}

module.exports = secondsCount;
