/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if (typeof hours === 'number' && hours > 0) {
            return hours  * 3600;
        }
    };

module.exports = secondsCount;
