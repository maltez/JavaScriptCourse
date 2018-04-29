/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    var first;
    var second;
    var result;

    if(isNaN(first) || isNaN(second)) {
        return;
    }

    result = first % second;
    result === 0 ? true : false;
    
    return;
}

// isDevided(6, 3);

module.exports = isDevided;
