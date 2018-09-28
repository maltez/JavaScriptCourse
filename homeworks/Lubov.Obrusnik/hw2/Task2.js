/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter(minute) {
    if (typeof (minute) == 'number' && minute >= 0 && minute < 60) {
        if (minute <= 15) {
            console.log('First quarter of the hour');
        } else if (minute <= 30) {
            console.log('Second quarter of the hour');
        } else if (minute <= 45) {
            console.log('Third quarter of the hour');
        } else {
            console.log('Fourth quarter of the hour');
        }
    } else {
        console.log('Try again');
    }
}
// hourQuoter();
module.exports = hourQuoter;