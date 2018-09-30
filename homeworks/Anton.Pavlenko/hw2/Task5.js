/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
console.log(factorial(3))
function factorial(num) {
    var string;
    if (typeof num == 'string') {
        string='Enter a number!';
        return string;
    }
    if(num<0){
        string = 'Enter the correct value';
        return string;
    }
    if (!Number.isInteger(num)){
        string = 'Enter the integer value';
        return string;
    }
    if(num == 0) {
        return 1;
    }
    for(var i = num-1; i>0; i--) {
        num *= i;
    }
    return num; 
}

module.exports = factorial;
