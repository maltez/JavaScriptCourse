/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    return (first % second == 0) ? true : false;
}

module.exports = isDevided;
