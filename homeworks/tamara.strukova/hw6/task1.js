/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

 const encrypt = (text, n = 2) => {
   let newString = '';
   let anotherString = '';
   let resultStr = text;

  if (typeof text !== 'string')
    return 'Please, enter a string for the first argument';

  if (typeof n !== 'number')
    return 'Please, put a number for the second argument';

  if (n <= 0)
    return text;



  for (let j = 0 ; j < n; j++){
    for (let i = 0; i < resultStr.length; i++){

      if (i % 2 !== 0) {
        newString = newString + resultStr[i];
      } else {
        anotherString = anotherString + resultStr[i];
      }
    }

    resultStr = newString + anotherString;
    newString = '';
    anotherString ='';
  }


   return resultStr;
 };

 // console.log(encrypt('This is a test!', 2));

/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n = 2) => {
  let encrStr = encrypt('This is a test!', 2);
  console.log(encrStr);
  let anotherStr = '';
  let decrStr = '';
  let elseStr = '';

  if (typeof encrStr !== 'string')
    return 'Please, enter a string for the first argument';

  if (typeof n !== 'number')
    return 'Please, put a number for the second argument';

  if (n <= 0)
    return text;

  for (let z = 0; z < n; z++ ){
    decrStr = encrStr.slice(0, encrStr.length/2);
    elseStr = encrStr.slice(encrStr.length/2);

    for (let i = 0; i < elseStr.length; i++){

      // console.log('elseStr: ',elseStr);
      // console.log('decrStr: ',decrStr);

      if(decrStr[i]){
        anotherStr += elseStr[i] + decrStr[i];
      } else {
        anotherStr += elseStr[i];
      }
    }
    encrStr = anotherStr;
    if(z !== n - 1)
      anotherStr = '';
  }
  return anotherStr;
};


console.log(decrypt('', 2));

module.exports = { encrypt , decrypt };
