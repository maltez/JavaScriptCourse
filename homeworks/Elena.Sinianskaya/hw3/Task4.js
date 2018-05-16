/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя, "){
  let arrPhrase = input.toLowerCase().split('');
  let arrKey = key.split(''); 
  let encodedArr = [];
  let finalCode = [];

  function getCode (arrPhrase, arrKey){
   for (let i = 0; i<arrPhrase.length; i+=1){
     let arrPhraseItem = arrPhrase[i];
      for (let j = 0; j<arrKey.length; j+=1){
        if (arrPhraseItem==arrKey[j]){
          encodedArr.push(i+1);
          break;
        }    
     }
   }
     return encodedArr;
  }
  let final = getCode(arrPhrase, arrKey);
  return final
 



/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
// function decode(input, key) {
//     return;
// }

function encode(input, key){
  // 1. set default value:
  if (key===undefined){
    key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ";
  }
  // 2. transform string to array:
  let arrPhrase = input.toLowerCase().split('');
  // let arrKey = key.split('');
  // 3. create empty arr:
  let encodedArr = [];
   for (let i = 0; i<arrPhrase.length; i++){
    // for (let j = 0; j<arrKey.length; j++){
    //   // arrPhrase.indexOf(arrPhrase[i])===arrKey.indexOf(arrKey[j]) //if check - return true
    //    if(arrPhrase[i]===arrKey[j]){
          encodedArr.push(i)
       // }
     // }
   }
  return encodedArr.join();
 }

// to check:
// console.log (encode(stringPhrase, stringKey));
// let stringForDecoding = "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85";
function decode (input , key){
    // set default value:
     // if (key===undefined){
     //   key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ,";
     // }
     let arrPhrase = input.toLowerCase().split(",");
     // return arrPhrase
     let arrKey = key.split(' ');
     let decodedString=[];
     let test;
     let test1;
     
     for (let i=0; i<arrPhrase.length; i++){
     
       // test = arrPhrase[i];
       test1 = arrKey[arrPhrase[i]];
       decodedString.push(test1)
     }
   
     return decodedString.join();
   }
   
//    console.log (decode(stringForDecoding, stringKey));



module.exports = {
    encode,
    decode,
};
