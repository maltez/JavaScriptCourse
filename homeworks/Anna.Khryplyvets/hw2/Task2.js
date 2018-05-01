/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    var first = "The First Quoter";
    var second = "The Second Quoter";
    var third = "The Third Quoter";
    var fourth = "The Fourth Quoter";

    if(typeof minute === 'number' && !isNaN(minute)) {
        if (minute >= 0 && minute <= 14) {
            return first;
        }
        else if (minute >= 15 && minute <= 30) {
            return second;
        }
        else if (minute >= 31 && minute <= 45) {
            return third;
        }
        else if (minute >= 46 && minute <= 59) {
            return fourth;
        }
        return("Are you joking?");
    }
    return("It's not a number!");
}

hourQuoter ();

module.exports = hourQuoter;
