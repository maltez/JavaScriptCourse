/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    let result = a % b;

    if (typeof(a) === 'number' && typeof(b) === 'number' ) {

        return result === 0;

    } else {
        return 'Is not a number';
    };
};

module.exports = isDevided;
