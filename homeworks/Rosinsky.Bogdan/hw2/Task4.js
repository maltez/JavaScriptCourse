/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    if (typeof first === 'number' && typeof second === 'number') {
        var result = first / second;
        // Если результат не число вернуть сообщение.
        if (!isFinite(result)) {
            return 'can not be divided into zero!';
        } else {
            // Вернуть true если число поделилось без остатка, или вернуть false если остаток есть.
            return (result % 1) ? false : true;
        }
    } else {
        return 'variable is not a number!';
    }
}


module.exports = isDevided;