/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

 const commonDevisor = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return -1
    }
    if(num1<0){
        num1*=(-1);
    }
    if(num2<0){
        num2*=(-1);
    }
    while(num1 > 0 && num2 > 0){
        if(num1 > num2){
            num1 %= num2;
        }
        else{
            num2 %= num1;
        }
    }
    return num1+num2;
    
 };
console.log(commonDevisor(24,36));
module.exports = commonDevisor;
