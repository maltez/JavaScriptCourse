/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

const commonDevisor = (num1, num2) => {
    var answer;

    if(typeof(num1) === 'number' && typeof(num2) === 'number'){
        if(num1 < 0) {
            num1 *=  -1;            
        }                           //the absolute value of a number
        if(num2 <0) {
            num2 *= -1;
        }
        if(num1 === 0 && num2 === 0) {
            return "Error.... division by zero"         // zero check
        }
        else if (num1 === 0) {
            return num2;
        }
        else if (num2 === 0) {
            return num1;
        }

        if(num1 < num2) {
            answer = num1;
        }
        else{
            answer = num2;
        }

        var number = answer;
        for(i = 0; i <= number; i++) {
            if(num1 % answer == 0) {
                if(num2 % answer == 0) {
                    return answer;
                }
            }
            answer--; 
        }
    }
    else {
        return "Error. Can't find common divider of " + typeof(num1) +' and ' + typeof(num2);
    };
}
console.log(commonDevisor( -5, 5 ));



//module.exports = commonDevisor;