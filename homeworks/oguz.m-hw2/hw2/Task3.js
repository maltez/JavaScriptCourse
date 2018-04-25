/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    var result;
    var seconds;
    var hours;
    if(typeof hours != 'number') {
        return;
    }

    if(typeof(hours)) {
        result = hours * 3600;
        return result;
    }

    return;
}

module.exports = secondsCount;
