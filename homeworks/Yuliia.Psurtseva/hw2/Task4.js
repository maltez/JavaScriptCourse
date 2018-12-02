/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    if (typeof(first) == "number" && typeof(second) == "number") {
        if (first % second == 0) {
            return 'True';
        }else{
            return 'False';
        }
    }else{
        return 'Not a number';
    }
}
console.log(isDevided(6, 3));
module.exports = isDevided;