/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */



const encrypt = (text, n) => {

    //or both methods: If the text is null or empty return exactly this value! If n is <= 0 then return the input text.
    if ((text === null) || (text === "") || (n <= 0)) {

        return text;
    };

    var i, j, k; 
    var resultStrChet = '';
    var resultStrNechet = '';
    var encryptedText = text;

    for (k = 0; k < n; k++) {
        resultStrChet = resultStrNechet = '';

        for (i = 1; i < encryptedText.length; i += 2) {
            resultStrNechet = resultStrNechet + encryptedText[i];
        }

        for (j = 0; j < encryptedText.length; j += 2) {
            resultStrChet = resultStrChet + encryptedText[j];
        }

        encryptedText = resultStrNechet + resultStrChet;
    }

    return encryptedText;
};
/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */

const decrypt = (encryptedText, n) => {

    var i, j, k, leftPartLength; 
    var resultStrChet = '';
    var resultStrNechet = '';
    var currentEncryptedText = encryptedText;
    var result = '';

    for (k = 0; k < n; k++) {

        result = '';
        leftPartLength = Math.floor(currentEncryptedText.length / 2);
        resultStrNechet = currentEncryptedText.substr(0,leftPartLength);
        resultStrChet = currentEncryptedText.substr(leftPartLength, (currentEncryptedText.length - leftPartLength));

        for (i = 0, j = 0; i < resultStrChet.length || j < resultStrNechet.length; i++, j++) {

            if (i < resultStrChet.length) {

                result += resultStrChet[i];
            }

            if (j < resultStrNechet.length) {

                result += resultStrNechet[j];
            }
        }
        currentEncryptedText = result;
    }

    return result;
}

console.log(decrypt(encrypt('This is a test!', 3),3));




module.exports = { encrypt , decrypt };
