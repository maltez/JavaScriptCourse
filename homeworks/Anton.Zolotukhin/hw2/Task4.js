/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    var remainder = (first % second == 0) ? true : false;
    console.log(remainder);
}

// isDevided(16, 2);
module.exports = isDevided;
