/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */


function isDevided(first, second) {
    var result = first % second;

    if (typeof(first) == 'number' && typeof(second) == 'number' ) {

        return (result === 0) ? true : false;

    } else {
        return 'Is not a number';
    }
}

module.exports = isDevided;
