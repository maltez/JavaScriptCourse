/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    if(typeof(first)== "number"&&typeof(second)== "number")
    {
        if(second > 0)
        {
            var value = (first%second);
            if(!Boolean(value))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            console.log("value can not be negative or 0");
            return;
        }
        
    }
    else
    {
        console.log("the arguments isn't numeric");
        return;
    }
}

module.exports = isDevided;
