/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if (typeof hours === 'number') {
        return hours * 3600;
    } else {
        return 'Invalid data type.'
    }
}

console.log(secondsCount(3));

module.exports = secondsCount;