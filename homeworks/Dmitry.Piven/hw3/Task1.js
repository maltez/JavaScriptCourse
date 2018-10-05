/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function negativeFilter(array) {
    var newArrey = [];
    for (let index = 0; index < array.length; index++) {
        
        if(isPositive(array[index]))
        {
            newArrey.push(array[index])
        }
    }
    return newArrey;
}

function isPositive(value)
{
    if(typeof(value) == "number")
    {
        return value > 0? true :false;
    }
    else
    {
        return false;
    }
}


module.exports = negativeFilter;
