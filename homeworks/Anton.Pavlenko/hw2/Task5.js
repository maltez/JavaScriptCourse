/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
console.log(factorial(-1))
function factorial(num) {
    var string;
    if (typeof num != 'number') {
        string='Enter a number!';
        console.log(string);
        return 2;
    }
    if(num<0){
        string = 'Enter the correct value';
        console.log(string);
        return 2;
    }
    if (!Number.isInteger(num)){
        string = 'Enter the integer value';
        console.log(string);
        return 2;
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
