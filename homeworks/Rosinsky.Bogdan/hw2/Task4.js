/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
       // Exit if the parameters are not numbers.
       if (typeof first !== 'number' || typeof second !== 'number') {
        return;
       }
       // Return true if the number is without remainder, or return false if there is a remainder.
       return second === 0 ? undefined : (first % second) === 0;
}

module.exports = isDevided;
