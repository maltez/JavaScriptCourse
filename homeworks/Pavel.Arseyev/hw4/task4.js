/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */
const maxMin = (input, order = true) => {
    let min = 0;
    let max = 0;
    //Если второй переданный параметр - булево значение
    if(typeof(order) === 'boolean'){
        //перебираем переданный масив
        for(let i = 0; i < input.length; i++){
            //если находим в нем НЕ число
            if(typeof(input[i]) !== 'number'){
                //переходим к следующему элементу массива
                continue;
            } else {
                //Если все в порядке, начинаем сравнивать элемент с остальными элементами в массиве
                for(let k = 0; k < input.length; k++){
                    //если опять находим в нем НЕ число
                    if(typeof(input[k]) !== 'number'){
                        //переходим к следующему элементу массива
                        continue;
                    } else {
                        let first = input[i];
                        let second = input[k];

                        if(first < second){
                            min = first <= min ? first : min;
                            max = second >= max ? second : max;
                        } else {
                            min = second <= min ? second : min;
                            max = first >= max ? first : max;
                        }
                    }
                }
            }
        }
        return order === true ? max : min;
    } else {
        return 'Put an array with nunmbers and boolean true or false as arguments of function'
    }
};

let randomArr = [100, -600, 235, -45, '659', -689, -200, 0, 1240, 451, -78, -568978, 2658978];

console.log(maxMin(randomArr, true));
module.exports = maxMin;
