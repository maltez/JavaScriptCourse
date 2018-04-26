/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {

    if(Number.isInteger(first) && Number.isInteger(second)) {
        if (second === 0) {
            return false;
        } else if (first % second === 0) {
            return true;
        }
    }

    return false;
}

module.exports = isDevided;
