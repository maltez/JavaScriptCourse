/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {

    if ( typeof first !== 'number'){
        return false;
    } else if ( typeof second !== 'number'){
        return false;
    }

    var devision = first % second;
    if( devision == 0 ){
        return true;
    } else{
        return false;
    }
}

module.exports = isDevided;
