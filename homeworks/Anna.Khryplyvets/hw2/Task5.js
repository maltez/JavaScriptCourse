/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    var factorial = 1;

    if(num > 0){
        for (var i = 1; i <= num; i++) {
            factorial = factorial * i;
        }
        return(factorial);
    }
    return('Num must be positive');
}

factorial();

module.exports = factorial;
