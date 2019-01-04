/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    if (typeof minute === 'string' || (minute < 0 && minute > 60)) {
        return;
    } else if (minute >= 0 && minute < 15) {
        return 'first quarter';
    } else if (minute >= 15 && minute < 30) {
        return 'second quarter';
    } else if (minute >= 30 && minute < 45) {
        return 'third quarter';
    } else if (minute >= 45 && minute <= 59) {
        return 'fourth quarter';
    }
}
module.exports = hourQuoter;