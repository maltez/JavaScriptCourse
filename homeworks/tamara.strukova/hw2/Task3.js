/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if (typeof (hours) === 'number') {
        console.log(hours + ' hour(s) equals ' + hours * 3600 + ' seconds');
    } else {
        console.log('Please, put a number');
    }
}

module.exports = secondsCount;
