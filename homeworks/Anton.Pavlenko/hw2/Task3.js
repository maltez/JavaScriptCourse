/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */

console.log(secondsCount(3));

function secondsCount(hours) {
    var string;
    if (typeof hours != 'number') {
        string='Enter a number!';
        return string;
    }
    if(hours<0){
        string = 'Enter the correct value';
        return string;
    }
    return hours*3600;
}

module.exports = secondsCount;
