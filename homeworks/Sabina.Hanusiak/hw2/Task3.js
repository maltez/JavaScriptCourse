/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    var hours = 2;
    if (typeof hours === 'number'){
        return hours * 3600;
    }
}
console.log(secondsCount());

module.exports = secondsCount;
