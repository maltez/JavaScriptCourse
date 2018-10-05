/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */

function stringBuilder(n) 
{
    if(typeof(n)== "number")
    {
        var value = "";
        if(n<1)
        {
            for(i=1;i>=n;i--)
            {
                value += i+',';
            } 
        }else
        {
            for(i=1;i<=n;i++)
            {
                value += i+',';
            } 
        }
        return value;
    }
    else
    {
        console.log("the argument isn't numeric");
        return;
    }
};
module.exports = stringBuilder(5);
module.exports = stringBuilder(-4);
