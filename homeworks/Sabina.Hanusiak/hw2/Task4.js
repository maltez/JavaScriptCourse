/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    var first = 2;
    var second = 2;
    if (first%second === 0){
       return true;
    } else{
    return false;
    }
}
console.log(isDevided());

module.exports = isDevided;
