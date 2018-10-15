/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    return num1*num2/commonDevisor(num1, num2)
};
const commonDevisor = (m, n) => {
    if (typeof m !== 'number' || typeof n !== 'number') {
        return -1
    }
    if(m<0){
        m*=(-1);
    }
    if(n<0){
        n*=(-1);
    }
    while(m > 0 && n > 0){
        if(m > n){
            m %= n;
        }
        else{
            n %= m;
        }
    }
    console.log(m+n);
    return m+n;
    
 };

 console.log(lowestMultiple(12,36));
module.exports = lowestMultiple;
