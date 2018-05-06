/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

const isRemainder = (item, divider) => {
    let ost = item;
    if (ost < 0) {
        ost = -item;
    }
    while (ost > 0) {
        ost -= divider;
    }
    return ost;
};

const advancedFilter = (input) => {
    if (!Array.isArray(input)) {
        return false;
    }
    const divider = [3, 5, 7];
    const arr = [];

    input.forEach((item) => {
        for (let j = 0; j < 3; j += 1) {
            if (!isRemainder(item, divider[j])) {
                arr.push(item);
                break;
            }
        }
    });
    return arr;
};

module.exports = advancedFilter;
