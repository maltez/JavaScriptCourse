/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    var factorialCalculation = 1;
    if(typeof num === 'number') {
        if(num < 0){
            factorialCalculation = "enter a positive number";
        }
        if (num == 0) {
            factorialCalculation = 1;
        }
        if (num > 0 ) {
            var count = 1;
            while (count <= num) {
                factorialCalculation = factorialCalculation * count ;
                count ++; 
            } 
        }
    }
    else{
        factorialCalculation = "please enter a numeric value";
    }

    return factorialCalculation;

}
console.log(factorial(1));