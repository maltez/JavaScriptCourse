/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter(minute) {
    // Проверка на число.
    if (typeof minute === 'number') {
        if (minute < 0) {
            return false;
        } else if (minute <= 15) { // Первая четверть часа.
            return 1;
        } else if (minute <= 30) {  // Вторая четверть часа.
            return 2;
        } else if (minute <= 45) {  // Третья четверть часа.
            return 3;
        } else if (minute < 60) { // Четвертая четверть часа.
            return 4;
        } else {
            return false;
        }
    } else {
        return 'variable is not a number!';
    }
}

module.exports = hourQuoter;