/**
* @param {number} num
* @returns {number} Returns factorial of num.
*/
function factorial(num) {
    var factorial = 1;
    if (typeof num !== 'number' || num < 0) {
        return;
    // if the input equals 0, 0! = 1            
	} else if (num == 0) {
        return "0! equals 1";
    // if both conditions above falsy, input is a positive number. Calculate factorial        
    } else {
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return `${num}! equals ${factorial}`;
    }
}

console.log(factorial(5));
module.exports = factorial;
