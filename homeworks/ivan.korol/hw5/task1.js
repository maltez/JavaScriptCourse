/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */
const encrypt = (text, n) => {
    if (text === null || text === '' || n <= 0) {
        return text;
    }
    let textArr = text.split('');
    function transformString() {
        const encryptArr1 = [];
        const encryptArr2 = [];
        textArr.forEach((item, index) => {
            if (index % 2 === 0) {
                encryptArr2.push(item);
            } else {
                encryptArr1.push(item);
            }
            textArr = encryptArr1.concat(encryptArr2);
        });
    }
    for (let i = 1; i <= n; i += 1) {
        transformString();
    }
    return textArr.join('');
};
/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {
    if (encryptedText === null || encryptedText === '' || n <= 0) {
        return encryptedText;
    }
    let textArr = encryptedText.split('');
    function transformString() {
        const encryptArr2 = textArr.slice(textArr.length / 2);
        const encryptArr1 = textArr.slice(0, textArr.length / 2);
        const newArr = [];
        for (let k = 0; k < encryptArr2.length; k += 1) {
            const item1 = encryptArr2[k];
            const item2 = encryptArr1[k];
            newArr.push(item1, item2);
        }
        if (newArr.length > textArr.length) {
            newArr.pop();
        }
        textArr = newArr;
        return textArr;
    }
    for (let i = 1; i <= n; i += 1) {
        transformString();
    }
    return textArr.join('');
};
module.exports = { encrypt, decrypt };
