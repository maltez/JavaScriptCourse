/**
 * @param {number} first
 * @param {number} second
 * @returns {boolean} Returns devide first on second without remainder or not.
 */

function isDevided(first, second) {

    var remainder;

    if(typeof(first) === "number" && typeof(second) === "number") {

        remainder = first % second;
        
        if(remainder >0) {
            remainder = false;
        }
        else {
            remainder = true;
        }  
    }
    else {
        remainder = false;
    }

    return remainder;
}
console.log (isDevided(6, 2));