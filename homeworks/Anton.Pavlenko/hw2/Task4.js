/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */

console.log(isDevided(20,6));
function isDevided(first, second) {
    var string;
    if (typeof first == 'undefined'|| typeof second == 'undefined') {
        string='Enter a number';
        return string;
    }
    if (typeof first == 'string'|| typeof second == 'string') {
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
