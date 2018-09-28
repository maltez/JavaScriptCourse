/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter(minute) {
    if (typeof (minute) == 'number' && minute >= 0 && minute <= 59) {
        switch (true) {
            case (minute >= 0 && minute <= 15):
                console.log('First quarter of the hour');
                break;
            case (minute >= 16 && minute <= 30):
                console.log('Second quarter of the hour');
                break;
            case (minute >= 31 && minute <= 45):
                console.log('Third quarter of the hour');
                break;
            case (minute >= 46 && minute <= 59):
                console.log('Fourth quarter of the hour');
                break;
        }
    } else {
        return console.log('Try again');
    }
}
// hourQuoter();
module.exports = hourQuoter;
