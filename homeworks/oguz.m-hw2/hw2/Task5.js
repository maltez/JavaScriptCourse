/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    var result = 1;
    if(typeof(num)){
        if(num === 0) {
            return result;
        } else {
            while (num >= 1) {
                result *= num++;
                return result;
    }
    return;
}
}
}
module.exports = factorial;
