/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {

    if ( typeof hours !== 'number'){
        return false;
    }

    if ( hours < 0){
        return false;
    } else if ( hours > 0){
        return hours * 3600;
    }
}

module.exports = secondsCount;