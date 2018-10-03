/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    if (typeof minute === 'number') {
        if (minute <= 15) {
            return 'first quarter'
        } else if (minute <= 30) {
            return 'second quarter'
        } else if (minute <= 45) {
            return 'third quarter'
        } else if (minute <=59) {
            return 'fourth quarter'
        } else {
            return false
        }
    }
}

module.exports = hourQuoter;
