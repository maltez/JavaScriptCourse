/**
* @param {number} num
* @returns {number} Returns factorial of num.
*/
function factorial(num) {
    var factorial = 1;
    num = +prompt("Enter a positive number", "");
    console.log(num);
    // check the input to be a positive number. If not, exit the function
    if (typeof num !== 'number' || num < 0) {
        return;
    // if the input equals 0, 0! = 1            
	} else if (num == 0) {
        console.log("0! equals 1")
    // if both conditions above falsy, input is a positive number. Calculate factorial        
    } else {
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        console.log(num + "! equals " + factorial);
    }
}

// factorial();
module.exports = factorial;
