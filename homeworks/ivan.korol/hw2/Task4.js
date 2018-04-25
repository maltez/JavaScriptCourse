/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    var state = false;

    if(Number.isInteger(first) && Number.isInteger(second)) {
        
        if(first % second === 0 && second !== 0) {
            state = true;
        }
    }

    return state;
}

module.exports = isDevided;
