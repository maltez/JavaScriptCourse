/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

const advancedFilter = (input) => {
    const divider1 = 3;
    const divider2 = 5;
    const divider3 = 7;
    const arr = [];

    function divideNum(number, divider) {
        let num = number;
        if (num < 0) {
            num = -number;
        }
        while (num > 0) {
            num -= divider;
        }
        return num;
    }

    input.forEach((item) => {
        if (!divideNum(item, divider3)) {
            arr.push(item);
        } else if (!divideNum(item, divider2)) {
            arr.push(item);
        } else if (!divideNum(item, divider1)) {
            arr.push(item);
        }
    });
    return arr;
};

module.exports = advancedFilter;
