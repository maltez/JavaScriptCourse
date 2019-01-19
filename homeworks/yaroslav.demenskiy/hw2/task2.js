/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    if (typeof minute === 'number') {

        let timeQuarter = '';

        if (minute >= 0 && minute <= 15) {
            timeQuarter = 'First quarter';
        } else if (minute > 15 && minute <= 30) {
            timeQuarter = 'Second quarter';
        } else if (minute > 30 && minute <= 45) {
            timeQuarter = 'Third quarter';
        } else if (minute > 45 && minute < 60) {
            timeQuarter = 'Fourth quarter';
        } else {
            return 'This is not human time.';
        }

        return timeQuarter;

    } else {
        return 'Invalid data type.';
    }
}

console.log(hourQuoter(59));

module.exports = hourQuoter;