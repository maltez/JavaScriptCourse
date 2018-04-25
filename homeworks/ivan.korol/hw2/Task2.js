/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    var result;

    if(!Number.isInteger(minute)) {
        return;
    }

    if (minute >= 0 && minute <= 15) {
        result = 1;
    }

    if (minute >= 16 && minute <= 30) {
        result = 2;
    }

    if (minute >= 31 && minute <= 45) {
        result = 3;
    }

    if (minute >= 46 && minute <= 59) {
        result = 4;
    }

    return;
}

module.exports = hourQuoter;
