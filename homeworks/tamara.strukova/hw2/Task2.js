/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */

function hourQuoter (minute) {

    if (typeof minute !== 'number') return 'please, put a number';

    if (minute >= 0 && minute <= 14){
        return '1st quarter of an hour';
    } else if (minute >= 15 && minute <= 29) {
        return '2nd quarter of an hour';
    } else if (minute >= 30 && minute <= 44) {
        return '3rd quarter of an hour';
    } else if (minute >= 45 && minute <= 59) {
        return '4th quarter of an hour';
    } else {
        return 'it is not an hour value';
    }
}

module.exports = hourQuoter;
