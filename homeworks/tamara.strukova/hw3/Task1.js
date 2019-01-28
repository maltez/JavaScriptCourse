let randomArray = [];

for (let i = 0; i < 40; i++) {
    randomArray.push(Math.floor( (Math.random()*80) - 40));
}

//console.log(randomArray);

function isPositive(num) {

    if (typeof(num) !== 'number'){
        return '\n Please, put a number. \n'
    }

    return num >= 0;
}
/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function negativeFilter(input) {
    let newArray = [];

    for (let i = 0; i < input.length; i++) {

        let item = input[i];

        if (typeof item !== 'number') {
            return 'Please, put an array of numbers.'
        }

        if (isPositive(item)) {
            newArray.push(item);
        }
    }

    return newArray;
}

console.log('\n' + negativeFilter(randomArray));

module.exports = negativeFilter;
