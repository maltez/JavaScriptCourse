/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */

function secondsCount(hours) {
    var seconds;

    if (typeof(hours) == 'number') {
        seconds = hours * 60;
    };

    return seconds;
}

module.exports = secondsCount;
