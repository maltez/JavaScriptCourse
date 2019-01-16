/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    if (typeof num === 'number' && num > 0){
        var fact = num;
        for (var i = num; i > 1; i--){
            fact *= i-1
        }
        return fact;
    } else {
        return 'You enter incorrect value, please enter number more than 1'
    }
}

console.log(factorial(3));

module.exports = factorial;

