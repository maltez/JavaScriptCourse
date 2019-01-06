/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter(minute) {
    if (typeof(minute) == "number") {
        if(minute < 0 || minute > 60) {
            return 'Input another time'
        } else if(minute < 15) {
            return 'First';
        } else if(minute < 30) {
            return 'Second';
        } else if(minute < 45) {
            return 'Third';
        } else {
            return 'Fourth';
        }
    }else {
        return 'Not a number';
    }    
}
console.log(hourQuoter(30));
module.exports = hourQuoter;