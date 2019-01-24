/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {

    if(typeof(num1) === 'number' && typeof(num2) === 'number') {
        if(num2 < 0) {
            num2 *= -1;
        }
        if(num1 < 0) {                                    //the absolute value of a number
            num1 *= -1;
        }
        if (num1 === 0 || num2 === 0){                      // zero check
            return "enter a value greater than zero";
        }

        var answer;
        if(num1 > num2) {
            answer = num1;
        }
        else {
            answer = num2;
        }
        var p = answer;
        while(1) {
            if (answer % num1 == 0) {
                if(answer % num2 == 0) {
                    return answer;     
                }
            }
            answer += p;
        }  
    }
    else {
        return 'Error... The function must take two numeric values.'
    }
};

console.log(lowestMultiple(45, 2));

//module.exports = lowestMultiple;
