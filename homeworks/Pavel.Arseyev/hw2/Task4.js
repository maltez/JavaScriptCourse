/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    return console.log(first%second ? false : true);
}

isDevided(10, 2);

module.exports = isDevided;
