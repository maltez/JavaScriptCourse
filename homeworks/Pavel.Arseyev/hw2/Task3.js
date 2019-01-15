/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if(typeof hours !== 'number'){
        return console.log('"' + hours + '" is not a number. Please insert correct value');
    } else {
        let ending;
        if(hours >= 2){
            ending = 'hours';
        } else {
            ending = 'hour'
        }
        return console.log('There are ' + (hours*3600) + ' seconds in ' + hours + ' ' + ending + '.');
    }
   
}

secondsCount(31);

module.exports = secondsCount;
