/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

function advancedFilter(array) {
    var newArrey = [];
    for (let index = 0; index < array.length; index++) {
        
        if(isNumberInRange(array[index]))
        {
            newArrey.push(array[index])
        }
    }
    return newArrey;
}

function isNumberInRange(value)
{
    if(typeof(value) == "number")
    {
        if(value>=0&&value<10)
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
        return false;
    }
}

module.exports = advancedFilter;
