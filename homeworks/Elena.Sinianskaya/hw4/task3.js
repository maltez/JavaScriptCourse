/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

// Функция принимает два числа. Возвращает наименьшее общее кратное этих двух чисел.
// const advancedFilter = (input) => {
//     const result = input.filter (function (item) {
//         return (item % 3 === 0 || item % 5 === 0 || item % 7 === 0);
//     });
//     return result;
// };

const advancedFilter = (input) => {
    const array = input;
    const result = array.filter(item => item % 3 === 0 || item % 5 === 0 || item % 7 === 0);
    return result;
};

module.exports = advancedFilter;
