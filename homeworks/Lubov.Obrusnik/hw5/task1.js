/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

const encrypt = (text, n) => {

    if (text === ('' || null) || n <= 0) {
        return text;
    }

    for (let j = 1; j <= n; j += 1) {
        textCrypt = '';
        textCrypt2 = '';
        for (let i = 0; i < text.length; i += 1) {

            if (i % 2 !== 0) {
                textCrypt += text[i];
            } else {
                textCrypt2 += text[i];
            }

        }
        text = textCrypt + textCrypt2;
    }
    return text;
};
// console.log(encrypt('This is a test!', 3));
/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {
    if (encryptedText === ('' || null) || n <= 0) {
        return encryptedText;
    }
    
    var half = Math.floor(encryptedText.length / 2);
    
    for (let j = 1; j <= n; j += 1) {
        var textCrypt = '';
        var textCrypt2 = '';
        for (let i = 0; i < encryptedText.length; i += 1) {
            
            if (i < half) {
                textCrypt2 += encryptedText[i];
            }
            else{
                textCrypt += encryptedText[i];
            }

        }
        encryptedText='';
        for (let i = 0; i < half; i += 1) {
            encryptedText += textCrypt[i] + textCrypt2[i];
        }
        if(textCrypt.length>half){
            encryptedText += textCrypt[half];
        }
    }
        return encryptedText;
};

// console.log(decrypt(encrypt('This is a test!', 3), 3));

module.exports = {
    encrypt,
    decrypt
};