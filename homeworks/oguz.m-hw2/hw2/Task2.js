/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    let = result ; 
    let = minute ; 
    if(zulu(minute)){
        if(minute >=0 && minute <= 15 ) {
            result = 1
        }
        if(minute > 15 && minute <=30) {
            result = 2;
        }
        if(minute >30 && minute <=45) {
            result = 3;
        }
        if(minute >45 && minute <= 60) {
            result = 4
        }
        if(minute >=61) {
            result = "Error , in an hour only 60 minutes)"
        }
    }
return;
}

module.exports = hourQuoter;
