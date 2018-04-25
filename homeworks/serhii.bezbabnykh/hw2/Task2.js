/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    var minute;
    var result;

    if (typeof minute != 'number') {
        return;
    }

    if (minute > 0 && minute <=15) {
        result=1;
    }

    if (minute > 15 && minute <=30) {
        result=2;
    }

    if (minute > 30 && minute <=45) {
        result=3;
    }

    if (minute > 45 && minute <=60) {
        result=4;
    }

    if (minute > 60) {
        result = "Not a part of an hour";
    }

    if (minute <= 0) {
        result = "Not a part of an hour";
    }

    // console.log(result);
    return(result);
}

// hourQuoter(28);

module.exports = hourQuoter;
