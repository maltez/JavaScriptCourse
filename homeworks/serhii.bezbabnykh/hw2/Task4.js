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
        result = "This is string"
    } else {
        result = first % second;

        if (result>0) {
            result = false;
        } else {
            result = true;
        }
    }

    // console.log(result);
    return(result);
}

// isDevided(6, 2);

module.exports = isDevided;
