/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
    if(typeof(hours)== "number")
    {
        if(hours > 0)
        {
            return (hours * 3600);
        }
        else
        {
            console.log("value can not be negative");
            return;
        }
        
    }
    else
    {
        console.log("the argument isn't numeric");
        return;
    }
}

module.exports = secondsCount;
