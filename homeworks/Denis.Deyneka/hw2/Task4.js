 /**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second){
    var dev;
    dev = first % second;
    if(dev == 0) {
        return true;
    } else {
        return false;
    }
}
module.exports = isDevided;