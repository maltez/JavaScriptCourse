/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    var hours;
    var seconds;

    if(typeof hours != 'number') {
        return;
    }

    if (hours < 0) {
        seconds = "Error";
    } else {
        seconds = hours * 3600;
    }

    // console.log(seconds);
    return(seconds);
}

// secondsCount(2);

module.exports = secondsCount;
