/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */

//  _____start_____
function secondsCount(hours) {
  if (typeof hours === "number"){
    return (hours * 3600);
  }
  else {
    return ("Not a number! Please, wright a number.");
  }
}
console.log (secondsCount(5));
// _____finish____
module.exports = secondsCount;
