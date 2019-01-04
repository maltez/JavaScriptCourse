/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

const encrypt = (text, n) => {
    if (text === null) {
        return null
    } else if (text === '') {
        return ''
    } else if (n <= 0) {
        return text
    }
    for (let i = 0; i < n; i += 1) {
        var textArr = text.split('');
        var secondChar = '';
        var otherChar = '';
        for (let j = 0; j < textArr.length; j += 1) {
            if (j % 2) {
                secondChar += textArr[j];
            } else {
                otherChar += textArr[j];
            }
        } text = secondChar.concat(otherChar);
    } return text
};

/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {

}

module.exports = { encrypt , decrypt };
