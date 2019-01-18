/**
 * Checks if number is in range between 0 and 10(> 0 and < 10)
 * @param {number} number
 * @returns {boolean} Returns true if number is in range between 0 and 10/ Returns false if not
 */
function isNumberInRange(number) {
    if(typeof number !== 'number'){
        return false;
    } else if(number > 0 && number < 10){
        return true;
    } else {
        return false;
    }
}

/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
function advancedFilter(input) {
    let newArr = [];
    for(let i=0; i<input.length; i++){
        if(!isNumberInRange(input[i])){
            continue;
        } else{
            newArr.push(input[i]);
        }
    }
    return newArr;
}


let arr = [];
let counter = 0;

//Пушим случайные числа от -15 до 15 в массив
while(counter < 40){
    arr.push(Math.floor((Math.random()*30)-15));
    counter++;
}

//Выводим в консоль получившийся массив со случайными числами
console.log(arr);
//Выводим в консоль отсортированный массив с числами больше 0 и меньше 10
console.log(advancedFilter(arr));

module.exports = advancedFilter;
