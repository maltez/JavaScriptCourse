/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter(minute) {
    // Check for a number.
    if (typeof minute === 'number') {
        if (minute < 0) {
            return false;
        } else if (minute <= 15) { // First quarter of an hour.
            return 1;
        } else if (minute <= 30) {  // Second quarter of the hour.
            return 2;
        } else if (minute <= 45) {  // The third quarter of an hour.
            return 3;
        } else if (minute < 60) { // The fourth quarter of an hour.
            return 4;
        } else {
            return false;
        }
    } else {
        return 'variable is not a number!';
    }
}

module.exports = hourQuoter;