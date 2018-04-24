/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if (typeof hours === 'number') {
        // Если часы не отрецательны то вернуть количество секунд.
        if (hours >= 0) {
            return hours * 3600;
        } else {
            return false;
        }  
    } else {
        return 'variable is not a number!';
    }
}

module.exports = secondsCount;
