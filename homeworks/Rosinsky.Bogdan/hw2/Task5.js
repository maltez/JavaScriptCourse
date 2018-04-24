/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    // Проверка на число.
    if (typeof num === 'number') {
        var factorial = 1;
        // Вычисления факториала.
        while (num >= 1) {
            factorial *= num--;
        }
        return factorial;
    } else { // Вернуть сообщение если аргумент не число.
        return 'variable is not a number!';
    }
}

module.exports = factorial;
