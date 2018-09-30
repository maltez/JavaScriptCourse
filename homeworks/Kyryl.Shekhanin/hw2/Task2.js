/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter(minute) {
    if ((typeof minute) !== 'number') {
        return;
    }

    if (minute < 0 || minute > 59) {
        return;
    }

    var Quoter = Math.floor (minute / 15);

    return ++Quoter;
}

module.exports = hourQuoter;
