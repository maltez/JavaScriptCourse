/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    if (typeof first == 'number' && second == 'number') {
        return first % second === 0;
    } else {
        return false;
    }
}

module.exports = isDevided;
