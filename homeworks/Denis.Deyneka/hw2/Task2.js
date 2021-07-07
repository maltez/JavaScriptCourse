/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    var res;
    if (typeof(minute) == 'number' && minute >= 0 && minute <= 60) {
        switch (true) {
            case minute < 15:
                res = 1;
                break;
            case minute < 30:
                res = 2;
                break;
            case minute < 45:
                res = 3;
                break;
            default:
                res = 4;
        }
    } else {
        return false;
    }
    return res;
}
module.exports = hourQuoter;