/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    //Если переданные параметры являются числами
    if(typeof(num1) === 'number' && typeof(num2) === 'number'){
        //И если они больше нуля
        if(num1 !== 0 && num2 !== 0){
            let i = 1;
            while(i > 0){
                i++;
                if(!(i%num1) && !(i%num2)){
                    return i;
                }
            }
        } else{
            return 'Zero is not allowed here, put a number below or above 0'
        }
    } else {
        return 'Put a number!'
    }  
};

console.log(lowestMultiple(326, 856));


module.exports = lowestMultiple;
