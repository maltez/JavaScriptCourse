/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if (typeof(hours) == "number") {
        if (hours < 0) {
            return 'Too small hours'
        }else {        
            return hours*360;
        }
    }else{
        return 'Not a number';
    }
}
console.log(secondsCount(5));
module.exports = secondsCount;