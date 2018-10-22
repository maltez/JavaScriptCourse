/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (inputArray) => {
    let ValueArray = [];
    for (let index = 0; index < inputArray.length; index++) {
        if(typeof(inputArray[index])=="number" && inputArray[index] > 0)
        {
            if (inputArray[index] % 3 == 0 || inputArray[index] % 5 == 0 || inputArray[index] % 7 == 0)
            {
                ValueArray.push(inputArray[index]);
            }
        }
        
    }
    return ValueArray
};

module.exports = advancedFilter;
