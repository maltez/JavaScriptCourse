/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */

console.log(hourQuoter(10));

function hourQuoter (minute) {
    var string;
    var num;
    if (typeof minute != 'number') {
        string='Enter a number!';
        console.log(string);
        return 2;
    }
    if(minute<0||minute>59){
        string = 'Enter the correct value';
        console.log(string);
    }
    if(minute>=0 && minute<=15){
        num = 1;
    }
    if(minute>15 && minute<=30){
        num = 2;
    }
    if(minute>31 && minute<=45){
        num=3
    }
    if(minute>45 && minute<=59){
        num=4;
    }
    return num;
}

module.exports = hourQuoter;
