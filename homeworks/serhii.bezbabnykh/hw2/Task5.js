/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {
    var result = 1;

    if (isNaN(num)) {
        result = "This is string";
    } else {
        for (var i = 1; i <= num; i++) {
            result *= i;
        }
    }

    // console.log(result);
    return(result);
}

// factorial('3');

module.exports = factorial;
