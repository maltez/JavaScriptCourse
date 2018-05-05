/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {

    if (Number.isInteger(minute)) {
        if(minute < 0 || minute > 59) {
            return;
        } else if (minute >= 0 && minute <= 15) {
            return 1;
        } else  if (minute >= 16 && minute <= 30) {
            return 2;
        } else if (minute >= 31 && minute <= 45) {
            return 3;
        } else if (minute >= 46 && minute <= 59) {
            return 4;
        }
    }

    return;
}

module.exports = hourQuoter;
