/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if (typeof hours == 'number') {
        // In one hour 3600 seconds
        var seconds = 3600;
        var secondsInHours = hours * seconds;
        return secondsInHours;
    } else {
        return false;
    }
}

module.exports = secondsCount;
