/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key) {
    return;
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key) {
    return;
}

module.exports = {
    encode,
    decode,
};

var stringPhrase = "Буря мглою небо кроет вихри снежные крутя то как зверь она завоет то заплачет как дитя"; //
var stringKey = "абвгдеёжзийклмнопрстуфхцчшщьъэыюя ,-";

function encode(input, key){
  // 1. set default value:
  if (key===undefined){
    key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ";
  }
  // 2. transform string to array:
  var arrPhrase = input.toLowerCase().split('');
  var arrKey = key.split('');
  // 3. create empty arr:
  var encodedArr = [];
   for (var i = 0; i<arrPhrase.length; i++){
    for (var j = 0; j<arrKey.length; j++){
      // arrPhrase.indexOf(arrPhrase[i])===arrKey.indexOf(arrKey[j]) //if check - return true
       if(arrPhrase[i]===arrKey[j]){
        //encodedArr.push(j) //[1, 20, 17, 32, 33, 13, 3, 12, 15, 31, 33, 14, 5, 1, 15, 33, 11, 17,..]
         encodedArr.push(i)
       }
     }
   }
  return encodedArr;
 }

// to check:
// console.log (encode(stringPhrase, stringKey));


function decode (arr, key){
    // set default value:
     if (key===undefined){
       key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ";
     }
     // var arrPhrase = input.toLowerCase().split('');
     var arrKey = key.split('');
     var decodedString=[];
       for (var i = 0; i<arr.length; i++){
       for (var j = 0; j<arrKey.length; j++){  
        //  if (arr[i]===arrKey.indexOf(arrKey[j])){ What should be?
        //    decodedString.push(arrKey[j])
        //  }
        }
       }
     return decodedString;
   }
   
//    console.log (decode(arrForDecoding, stringKey));