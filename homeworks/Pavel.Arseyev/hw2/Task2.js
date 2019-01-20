/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */

 /* Первый вариант 
function hourQuoter (minute) {
    if(typeof(minute) !== 'number'){
        return console.log('"' + minute + '" is not a number. Please insert correct value');
    } else if(minute > 59){
        return console.log('Incorrect value. Please insert a number between 0 and 59.');
    }
    //вычисляем сколько процентов введенное значение составляет от часа
    let value = (minute * 100) / 60;
    let result;
    if(value <= 25){
        result = '1st';
    } else if(value <= 50) {
        result = '2nd';
    } else if(value <= 75) {
        result = '3rd'; 
    } else if(value <= 100) {
        result = '4th';
    }
    return console.log('This is ' + result + ' quarter of an hour');
}
hourQuoter(46);
*/

//Второй вариант
function hourQuoter (minute) {
    if(typeof(minute) !== 'number'){
        return console.log('"' + minute + '" is not a number. Please insert correct value');
    } else if(minute > 59){
        return console.log('Incorrect value. Please insert a number between 0 and 59.');
    }

    let value = Math.ceil(minute / 60 * 4);
    let result;
    switch(value){
        case(1):
            result = '1st';
            break;
        case(2):
            result = '2nd';
            break;
        case(3):
            result = '3rd'; 
            break;
        case(4):
            result = '4th';
            break;
        default:
            return console.log('invalid value');
    }
    return console.log('This is ' + result + ' quarter of an hour');
}

hourQuoter(46);

module.exports = hourQuoter;
