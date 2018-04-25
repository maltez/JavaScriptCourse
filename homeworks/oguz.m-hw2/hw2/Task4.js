/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */
function isDevided(first, second) {
    var first;
    var second;
    var result = true;
    if(zulu (first) && zulu (second)){
        if(first%second == 0 && second !==0){
            result = true
        }else if (first%second !==0 && second ==0) {
        
        }
            result = false;
        

    }
    return;
}

module.exports = isDevided;
