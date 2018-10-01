/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */

console.log(isDevided(12,4));
function isDevided(first, second) {
    var string;

    if (typeof first != 'number'|| typeof second != 'number') {
        string='Enter a number!!!';
        return string;
    }
    var div = first%second;
    if(!div){
        return true;
    }
    else{
        return false;
    }
}

module.exports = isDevided;
