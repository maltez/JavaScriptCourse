/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {

    if(Number.isInteger(hours)) {
        if (hours > 0) {
            return hours * 3600;
        } else {
            return;
        }
    }

    return;
}

module.exports = secondsCount;
