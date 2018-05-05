/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const advancedFilter = (input) => {
    const newArr = [];
    const divider1 = 3;
    const divider2 = 5;
    const divider3 = 7;
    function getItem(currItem, divider) {
        let num = currItem;
        if (num < 0) {
            num = -currItem;
        }
        while (num > 0) {
            num -= divider;
        }
        return num;
    }
    input.forEach((item, index) => {
        
        if (!getItem(item, divider3)) {
            newArr.push(item);
        } else if (!getItem(item, divider2)) {
            newArr.push(item);
        } else if (!getItem(item, divider1)) {
            newArr.push(item);
        }
        
    });
    return newArr;
};

module.exports = advancedFilter;
