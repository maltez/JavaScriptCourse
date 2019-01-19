/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    if (typeof num === 'number' && num >= 0) {

        let numFactorial = 1;

        if (num === 0 || num === 1) {
            return numFactorial;
        } else {

            for (let i = 1; i !== num + 1; i++) {
                numFactorial *= i;
            }

            return numFactorial;
            
        }

    } else if (typeof num === 'number' && num < 0) {
        return 'Factorial cannot be less than 0.'
    } else {
        return 'Invalid data type.';    
    }
}

console.log(factorial(3));