/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */


 // key = Stirlitz

function encode(input = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя', key) {
    var cipher = [];
    input = input.toLowerCase();    // register change
    if (key === 'Stirlitz') {
        if(typeof(input) === 'string') {
            var alphabet =  {
                'а': 15,
                'б': 48,
                'в': 134,
                'г': 345,
                'д': 90,
                'е': 76,
                'ё': 2345,
                'ж': 56,
                'з': 775,
                'и': 231,
                'й': 91,
                'к': 888,
                'л': 101,
                'м': 2356,
                'н': 48306,
                'о': 22,
                'п': 222,
                'р': 876,
                'с': 0,
                'т': 1,
                'у': 432,
                'ф': 0987,
                'х': 23456,
                'ц': 3456,
                'ч': 87654,
                'ш': 2,
                'щ': 31,
                'ъ': 42,
                'ы': 54,
                'ь': 64,
                'э': 75,
                'ю': 86,
                'я': 96,
                ' ': 505,
                ',': 9875
            }
            for(var i = 0; i < input.length; i++) {    
                for (var k in alphabet) {
                    if(k === input[i]){
                        cipher.push(alphabet[k]);
                    }
                }
            }
            return cipher;

        }
        else {
            return 'the function must take a string'
        }
    }

    else {
        return "enter the correct key";
    }
}

console.log(encode( "Буря мглою недо кроет, вихри снежные крутя, то как зверь она завоет то заплачет как дитя", 'Stirlitz'));


/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */

function decode(input, key) {
    if(key === 'Stirlitz') {

        if(Array.isArray(input)) {
            var decodedString = '';
            var alphabet =  {
                'а': 15,
                'б': 48,
                'в': 134,
                'г': 345,
                'д': 90,
                'е': 76,
                'ё': 2345,
                'ж': 56,
                'з': 775,
                'и': 231,
                'й': 91,
                'к': 888,
                'л': 101,
                'м': 2356,
                'н': 48306,
                'о': 22,
                'п': 222,
                'р': 876,
                'с': 0,
                'т': 1,
                'у': 432,
                'ф': 0987,
                'х': 23456,
                'ц': 3456,
                'ч': 87654,
                'ш': 2,
                'щ': 31,
                'ъ': 42,
                'ы': 54,
                'ь': 64,
                'э': 75,
                'ю': 86,
                'я': 96,
                ' ': 505,
                ',': 9875
            }
            for(var  i= 0; i < input.length; i++){
                for(key in alphabet) {
                    if(alphabet[key] === input[i]){
                        decodedString += key;
                    }
                }
            }
            return decodedString;
        }
        else {
            return 'the function must take an array of numbers'
        }
    }
    else {
        return "enter the correct key"; 
    }
}
console.log(decode([ 48,432,876,96,505,2356,345,101,22,86,505,48306,76,90,22,505,888,876,22,76,1,9875,505,134,231,23456,
    876,231,505,0,48306,76,56,48306,54,76,505,888,876,432,1,96,9875,505,1,22,505,888,15,888,505,775,134,76,876,64,
    505,22,48306,15,505,775,15,134,22,76,1,505,1,22,505,775,15,
222,101,15,87654,76,1,505,888,15,888,505,90,231,1,96 ], 'Stirlitz'))


/*module.exports = {
    encode,
    decode,
}; */

