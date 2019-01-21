let randomArray = [];

for (let i = 0; i < 100; i++) {
    randomArray.push(Math.floor( (Math.random()*80) - 40));
}

function isNumberInRange(num) {

    if (typeof num !== 'number') {
        return '\n Please, put a number.'
    }

    return (num > 0 && num < 10);

}

// console.log(isNumberInRange( 0));

/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {

    let newArray = [];

    for (let i = 0; i < input.length; i++){

        let item = input[i];

        if (typeof item !== 'number') {
            return 'Please, put an array of numbers.'
        }

        if (isNumberInRange(item)) {
            newArray.push(item);
        }
    }

    return newArray;

}

console.log(advancedFilter(randomArray));

module.exports = advancedFilter;
