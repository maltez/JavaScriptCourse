/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if (typeof hours === "number"){
      return (hours * 3600)
    }
    else {
      return ('It\'s not a number! Please, wright a number.')
    }
  }
  console.log (secondsCount(5))

module.exports = secondsCount;
