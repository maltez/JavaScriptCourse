// функция находит наибольший общий делитель

let greatest = function (dev1, dev2) {
    if (dev2 % dev1 === 0){
        return dev1
    } else {
        for (dev1; dev1 > 0; dev1--){

            // здесь проверяются оба числа на деление без остатка на меньшее,
            // если большее не делится на меньшее без остатка сразу
            if (!(dev1 % (dev1 - 1)) && !(dev2 % (dev1 - 1))) {
                return  (dev1-1)
            }

        }
    }
};

/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {

    if ((typeof num1 !== 'number') || (typeof num2 !== 'number'))
        return 'Please, put numbers only.';

    if ((num1 <= 0) || (num2 <=0))
        return 'Please, put a value bigger than 0.';

    let dev1;
    let dev2;

    // здесь определяю, чтобы всегда одна конкретная переменная была меньше, а другая больше,
    // не зависимо от того, в каком порядке это указано
    if (num1 < num2){
        dev1 = num1;
        dev2 = num2;
    } else {
        dev1 = num2;
        dev2 = num1;
    }

    return (dev1 * dev2) / greatest(num1, num2);
};

console.log(lowestMultiple(10, 20));

module.exports = lowestMultiple;
