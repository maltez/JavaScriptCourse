/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    if ((typeof first) !== 'number' && (typeof second) !== 'number') {
        return;
    }
    return !(first % second);
}

module.exports = isDevided;
