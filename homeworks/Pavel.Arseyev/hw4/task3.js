/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

const advancedFilter = (input) => {
    let result = [];
    for(let i = 0; i < input.length; i++){
        let item = input[i];
        if(typeof item === 'number'){
            if(!(item%3) || !(item%5) || !(item%7) ){
                result.push(item);
            }
        }
    }
    return result.length ? result : 'No matching numbers'; 
};

//Генерирует массив с заданным количеством целых чисел от -50 до +50
const generateRandomNumbers = (arr, counter) => {
    for(let i = 0; i < counter; i++){
        let rand = Math.floor(100*Math.random() - 50);
        arr.push(rand);
    }
}

let randomArr = []
generateRandomNumbers(randomArr, 20);

console.log(advancedFilter(randomArr));

module.exports = advancedFilter;
