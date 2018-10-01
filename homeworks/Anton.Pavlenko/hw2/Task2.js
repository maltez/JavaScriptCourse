/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */

console.log(hourQuoter(10));

function hourQuoter (minute) {
    var string;
    if (typeof minute != 'number') {
        string='Enter a number!';
        return string;
    }
    if(minute<0||minute>59){
        string = 'Enter the correct value';
    }
    if(minute>=0 && minute<=15){
        string ='The number is in the first quarter';
    }
    if(minute>15 && minute<=30){
        string ='The number is in the second quarter';
    }
    if(minute>31 && minute<=45){
        string ='The number is in the third quarter';
    }
    if(minute>45 && minute<=59){
        string ='The number is in the fourth quarter';
    }
    return string;
}

module.exports = hourQuoter;
