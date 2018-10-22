/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(value) {
    if(typeof(value)=="string")
    {
        
        var strLength = value.length;
        for (var i = 0; i < strLength; i++)
        {
            if (value[i] === value[strLength - 1 - i]) 
            { 
                return true;
            } else {
                return false;
            }
        }
        return result;
    }
    else
    {
        return;
    }
}

module.exports = isPolindrome;
