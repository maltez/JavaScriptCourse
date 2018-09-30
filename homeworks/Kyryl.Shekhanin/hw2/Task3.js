/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if ((typeof hours) !== 'number') {
        return;
    }
    var minute = hours * 60;
    var seconds = minute * 60;
    return seconds;
}


module.exports = secondsCount;
