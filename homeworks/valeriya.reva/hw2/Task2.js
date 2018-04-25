/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */

 function hourQuoter (minute) {
    var first = 15;
    var second = 30;
    var third = 45;
    var time;

    if (!isNaN(parseFloat(minute)) && isFinite(minute) && minute >= 0 && minute <= 59) {
        if (minute <= 15) {
            time = 1;
        } else if (minute > first && minute <= second) {
            time = 2;
        } else if (minute > second && minute <= third) {
            time = 3;
        } else {
            time = 4;
        }
    } else {
        return;
    }
    return time;
}

module.exports = hourQuoter;