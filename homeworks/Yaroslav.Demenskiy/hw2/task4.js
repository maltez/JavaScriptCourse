/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    return first % second ? false : true;
}

console.log(isDevided(3, 3));

module.exports = isDevided;