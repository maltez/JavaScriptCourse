/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    return typeof hours === 'number' ? hours * 3600 : 'Invalid parameter';
}

module.exports = secondsCount;
