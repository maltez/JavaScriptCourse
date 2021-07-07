/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    var sec;
    if (typeof (hours) === 'number' || hours > 0){
        sec = hours * 360;
    } else {
        return false;
    }
return sec;
}
module.exports = secondsCount;