/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if (typeof hours === 'number') {
        if (hours > 0) {
            return hours  * 3600;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
    
}

module.exports = secondsCount;
