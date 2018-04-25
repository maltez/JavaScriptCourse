/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */

function secondsCount(hours) {
    var seconds;

    if (typeof(hours) == 'number' && hours > 0) {
        seconds = hours * 3600;
    };

    return seconds;
}

module.exports = secondsCount;
