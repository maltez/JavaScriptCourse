/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    if (first % second == 0) {
        return true 
    } else {
        return false
    }
}

module.exports = isDevided;

