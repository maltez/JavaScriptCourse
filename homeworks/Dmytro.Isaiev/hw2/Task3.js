/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {

    if (typeof hours != 'number') return 'data is not valid';
    if (hours > 24) return 'data is not valid';
    if (hours <= 0) return 'data is not valid';

    return hours * 3600 + ' sec.'; 
}

module.exports = secondsCount;
