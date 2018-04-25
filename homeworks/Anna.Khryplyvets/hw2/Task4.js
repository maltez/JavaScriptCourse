/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    var rest = first % second;
    if (rest != 0) {
        return false;
    } else {
        return true;
    }
}

isDevided();

module.exports = isDevided;
