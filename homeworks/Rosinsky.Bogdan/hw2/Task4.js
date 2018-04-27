/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
       // Exit if the parameters are not numbers.
       if (typeof first !== 'number' && typeof second !== 'number') return;

       var result = first / second;

       // Output if not number.
       if (!isFinite(result)) return;
       // Return true if the number is without remainder, or return false if there is a remainder.
       return (result % 1 == 0);
}


module.exports = isDevided;