/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {

    var secInHour = 3600;

    if (typeof hours === 'number'){
        return hours * secInHour;

    } else {
        return ('The value you entered in not a number, please enter a number');
    }
}
console.log(secondsCount(5));

module.exports = secondsCount;
