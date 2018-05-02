/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {

    if (typeof minute != 'number') { 
        return 'data is not valid';
    }
    if (minute >= 60) { 
        return 'data is not valid';
    }
    if (minute < 0) { 
        return 'data is not valid';
    }
    if (minute < 15) {
        return 'first quarter';
    } 
    if (minute < 30) {
        return 'second quarter';
    } 
    if (minute < 45) {
        return 'third quarter';
    } 
    return 'fourth quarter';
}

module.exports = hourQuoter;
