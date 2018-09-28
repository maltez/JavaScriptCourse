/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    if (typeof minute == 'number' && minute >= 0 && minute < 60) {
        if (minute <= 15) {
            return 'First quarter';
        } else if (minute <= 30) {
            return 'Second quarter';
        } else if (minute <= 45) {
            return 'Third quarter';
        } else {
            return 'Fourth quarter';
        }
    } else {
        return false;
    }
}

module.exports = hourQuoter;
