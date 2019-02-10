/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    let multiple = [];
    let mult1 = [];
    let mult2 = [];
    for(let i = 1; i < num1; i++){
        mult1.push(num1 * i);
        mult2.push(num2 * i);
    }

    for (let j = 0; j < mult1.length; j++) {
        if(mult1.indexOf(mult2[j]) !== -1){
        multiple.push(mult2[j]); 
        }
    }
    return multiple[0];

};
console.log(lowestMultiple(1700, 2500))
module.exports = lowestMultiple;
