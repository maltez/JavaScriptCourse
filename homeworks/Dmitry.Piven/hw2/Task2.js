/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
    if(typeof(minute)== "number")
    {
        if(minute>=0&&minute<=59)
        {
            console.log(minute)
            if (minute>=0&&minute<15) {return 1}
            else if (minute>=15&&minute<30) {return 2}
            else if (minute>=30&&minute<45) {return 3}
            else if (minute>=45&&minute<=59) {return 4}
        }
        else
        {
            console.log("the argument isn't' in the range 0 to 59");
            return;
        }
        
    }
    else
    {
        console.log("the argument isn't numeric");
        return;
    }
}

module.exports = hourQuoter;
