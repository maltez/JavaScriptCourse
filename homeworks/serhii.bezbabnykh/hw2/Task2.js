/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    var minute;
    var result;

    if (typeof minute == 'number') {
        if (minute <=0 || minute > 60) {
            result = "Error";
        } else if (minute > 0 && minute <=15) {
            result=1;
        } else if (minute > 15 && minute <=30) {
            result=2;
        } else if(minute > 30 && minute <=45) {
            result=3;
        } else if (minute > 45 && minute <=60) {
            result=4;
        }
    }

    // console.log(result);
    return result;
}

// hourQuoter(28);

module.exports = hourQuoter;
