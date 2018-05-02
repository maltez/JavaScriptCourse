/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {

    if (typeof hours != 'number' || hours <= 0){ 
        return 'data is not valid';
    }

    return hours * 3600 + ' sec.'; 
}

module.exports = secondsCount;
