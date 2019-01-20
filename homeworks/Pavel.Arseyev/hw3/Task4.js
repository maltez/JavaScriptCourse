/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */

//Фразы-ключи содержащие все буквы алфавита:
//Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч.
//Шеф взъярён тчк щипцы с эхом гудбай Жюль.
//Экс-граф? Плюш изъят. Бьём чуждый цен хвощ!


let key = 'Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч.';
let input = 'Буря мглою небо кроет, вихри снежные крутя, то как зверь она завоет, то заплачет как дитя.';
let input2 = 'Любая отфонарная ФрАзА, __ С Абсолют?но ?* рандомными !!! символ)а((м.и';


//Функция для построения ключа, возвращает строку со всеми возможными вариантами символов из фразы-ключа.
//В том числе со знаками препинания и цифрами.
function buildKey(key){
    let keyArr = [];
    //Возможные знаки препинания
    let possibleSymbolsArr = [' ', '!', '?', ',', '.', '-', '—', '_', '(', ')', '@', '#', '$', '%', '^', '&', '*', '"', '\\', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    //Маленкие буквы
    let keyArrLittleLetters = key.toLowerCase().replace(/[^a-zа-яё]/g, '').split('');
    //Большие буквы
    let keyArrBigLetters = key.toUpperCase().replace(/[^A-ZА-ЯЁ]/g, '').split('');

    keyArr = keyArr.concat(keyArrLittleLetters, keyArrBigLetters, possibleSymbolsArr);

    return keyArr.join('');
}

// console.log(buildKey(key));



function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    if(typeof(input) !== 'string'){
        return console.log('Wrong value! Please enter any string');  
    }
    let resultArr = [];
    //Берем каждую букву кодируемой фразы
    for (let i = 0; i < input.length; i++) {
        //Сравниваем ее с каждой буквой ключейвой фразы из маленьких букв
        for(let k = 0; k < key.length; k++){
            //Если буквы совпадают, пушим индекс в результирующий массив
            if( input[i] === key[k] ){
                let number = k;
                resultArr.push(number);
            }
        }
    }
    return resultArr;
}

let encodedPhrase = encode(input, buildKey(key));
// console.log(encodedPhrase);


/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key) {
    let resultString = [];
    for(let i = 0; i < input.length; i++){
        resultString.push(key[input[i]]);
    }
    return resultString = resultString.join('');
}

console.log(decode(encodedPhrase, buildKey(key)));

module.exports = {
    encode,
    decode,
};
