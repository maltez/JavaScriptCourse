/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    var rest = first % second;
    return rest != 0;
}

isDevided();

module.exports = isDevided;
