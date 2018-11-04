/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */

console.log(secondsCount());

function secondsCount(hours) {
    var string;
    if (typeof hours != 'number') {
        string='Enter a number!';
        console.log(string);
        return -2;
    }
    if(hours<0){
        string = 'Enter the correct value';
        console.log(string);
        return -2;
    }
    return hours*3600;
}

module.exports = secondsCount;
