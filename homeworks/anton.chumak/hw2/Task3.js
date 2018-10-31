/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if(typeof hours === 'number' && !isNaN(hours)) {
        if(hours > 0){
            var second  = hours * 3600;
            return("There is " + second + " seconds in " + hours + " hours");
        }else{
            return("Error: negative value")
        }
        
    }
    return("Error: not a number");
}

secondsCount(); 

module.exports = secondsCount;
