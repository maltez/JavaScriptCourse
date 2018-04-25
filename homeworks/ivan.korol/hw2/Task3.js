/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    var result;

    if(Number.isInteger(hours)) {
        result = hours * 60 * 60;
        return result;
    }


    return;
}

module.exports = secondsCount;
