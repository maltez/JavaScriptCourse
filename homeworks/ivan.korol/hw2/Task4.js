/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {

    if(Number.isInteger(first) && Number.isInteger(second)) {
        if (second === 0) {
            return false;
        }

        return first % second === 0;
    }

    return false;
}

module.exports = isDevided;
