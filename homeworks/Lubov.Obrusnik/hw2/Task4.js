/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {

    if (typeof (first) == 'number' && typeof (second) == 'number') {
        return first % second == 0;
    } else {
        console.log('It is not number');
    }
}
// isDevided();
module.exports = isDevided;
