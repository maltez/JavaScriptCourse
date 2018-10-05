/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */

function factorial(num)
{
    if(typeof(num)== "number")
    {
        if(num > 0)
        {
            var value=1;
            for(i = 1; i <= num; i++)
            {
                value *= i;
            }
            return value;
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

module.exports = console.log(factorial);
