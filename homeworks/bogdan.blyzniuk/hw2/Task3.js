/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
if (isNaN(hours)|| hours==='') {
    return('Its not a number');
  } 
var seconds = hours*3600
    return (seconds);
}
console.log (secondsCount('2'));
module.exports = secondsCount;
