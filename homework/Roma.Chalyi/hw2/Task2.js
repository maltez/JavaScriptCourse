 /** 
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */

function hourQuoter (minute) {
    
    let hour;

    if(typeof (minute) === 'number'){

        if (minute < 0 || minute >= 60) {
            hour = 'please enter a number from 0 to 59';
        }
        else {
            if(minute < 15){
                hour = minute +' minutes - is the first quarter of an hour';
            }
            if (minute >= 15 && minute < 30) {
                hour = minute +' minutes - is the second quarter of an hour';
            }
            if (minute >= 30 && minute < 45){
                hour = minute +' minutes -  is the third quarter of an hour';
            }
            if (minute >= 45 && minute < 60){
                hour = minute +' minutes -  is the fourth quarter of an hour';
            }
        }
    }
    else{
        hour = 'please enter a number from 0 to 59';
    }

    return hour;
}
console.log(hourQuoter(53));