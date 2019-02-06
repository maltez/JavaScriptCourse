/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */
const commonDevisor = (num1, num2) => { 

    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return false;
    }

    num1 = Math.abs(num1);
    num2 = Math.abs(num2);

    let dev = num2;

    while (dev != 0){

        dev -=1;

        if (num1 % dev === 0 && num2 % dev === 0){

            return dev;
        }
    }
 }

 module.exports = commonDevisor;

// Second way to complete the task

 const commonDevisor = (num1, num2) => { 

    let rem = num1 % num2;

    while(rem != 0){

        num1 = num2;

        num2 = p;

        rem = num1 % num2;

    } return num2
 }

