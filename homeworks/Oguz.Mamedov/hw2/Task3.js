/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    let seconds;

    if (typeof(hours) === 'number' && hours > 0) {
        let seconds;
        seconds = hours * 3600;

    };

    return seconds;
};

module.exports = secondsCount;
