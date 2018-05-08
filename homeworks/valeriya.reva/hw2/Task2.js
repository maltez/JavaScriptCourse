/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */

 function hourQuoter (minute) {
    var first = 15;
    var second = 30;
    var third = 45;

    if (typeof(minute) === 'number' && minute > 0 && minute <= 59) {
        if (minute <= first) {
            return 1;
        } else if (minute <= second) {
            return 2;
        } else if (minute <= third) {
            return 3;
        } else {
            return 4;
        }
    } else {
        return 'enter another value';
    }
}

module.exports = hourQuoter;