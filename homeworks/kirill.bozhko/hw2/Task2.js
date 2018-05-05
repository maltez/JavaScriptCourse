/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    var firstHourQuoter;
    var secondHourQuoter;
    var thirdHourQuoter;
    var fourthHourQuoter;

    if (typeof minute === 'number') {
        if (minute <= 15) {
            return firstHourQuoter;
        }
        else if (minute <= 30) {
            return secondHourQuoter;
        }
        else if (minute <= 45) {
            return thirdHourQuoter;
        }
        else if (minute <60) {
            return fourthHourQuoter;
        }
        else if (minute < 0) {
            return false;
        }
        
        


    }
    else {
        return false;
    }

}

module.exports = hourQuoter;
