/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
//мой вариант
function factorial(num) {
    if(typeof num !== 'number' || num < 1 || !num){
        return 'Invalid. Please ansert a value more or equal to 1';
    }
    let result = num;
    for(let i = num; i > 1; i--){
        result *= i-1;
    }
    return result;
}

console.log(factorial(5));

//Второй вариант(подсмотрел на learn.javascript.ru)
function fact(n){
    if(typeof n !== 'number' || n < 1 || !n){
        return 'Invalid. Please ansert a value more or equal to 1';
    }
    return (n != 1) ? n * fact(n-1) : 1;
}

console.log(fact(5));

module.exports = factorial;
