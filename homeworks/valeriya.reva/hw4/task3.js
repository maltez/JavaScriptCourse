/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

const advancedFilter = (input) => {
    let resultArr = [];
    const numDivider = [3, 5, 7];

    if (!Array.isArray(input)) {
        throw new TypeError('invalid value');
    }
    const filterFun = (element) => {
        const thisElement = Math.abs(element);
        let result;

        for (let n = 0; n < numDivider.length; n += 1) {
            for (let a = thisElement; a >= 0; a -= numDivider[n]) {
                if (a <= 0) {
                    result = a === 0;
                }
            }
        }
        return result;
    };

    resultArr = input.filter(filterFun);

    return resultArr;
};

module.exports = advancedFilter;
