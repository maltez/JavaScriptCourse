/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */

// - Задание 2. Функция принимает параметр min. 
// Параметр должен являться числом. В нем лежит число от 0 до 59. 
// Функция должна возвращать в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

 function hourQuoter (minute) {
    var first = 15;
    var second = 30;
    var third = 45;
    var time;

    if (!isNaN(parseFloat(minute)) && isFinite(minute) && minute >= 0 && minute <= 59) {
        if (minute <= first) {
            time = 1;
        } else if (minute <= second) {
            time = 2;
        } else if (minute <= third) {
            time = 3;
        } else {
            time = 4;
        }
    } else {
        return;
    }
    return time;
}

console.log(hourQuoter(32));

module.exports = hourQuoter;