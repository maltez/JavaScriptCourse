/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    let a = 15;
    let b = 30;
    let c = 45;

    if (typeof(minute) === "number" && minute > 0 && minute <=59) {
        if (minute <=a){
            return 1;
        }else if (minute<=b){
            return 2;
        }else if (minute <= c){
            return 3;
        }else {
            return 4;
        }

    }else {
        return "Error"
    }

}

module.exports = hourQuoter;
