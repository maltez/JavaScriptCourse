/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

const encrypt = (text, n) => {
    if (typeof text !== 'string' || !text) {
        return text;
    }

    let arrText = text.split('');

    const findOdd = (element, index) => index % 2 !== 0;

    const findEven = (element, index) => index % 2 === 0;

    for (let i = n; i > 0; i -= 1) {
        arrText = (arrText.filter(findOdd)).concat(arrText.filter(findEven));
    }

    return arrText.join('');
};

/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {
    if (typeof encryptedText !== 'string' || !encryptedText) {
        return encryptedText;
    }

    const arrText = encryptedText.split('');

    for (let i = n; i > 0; i -= 1) {
        const start = Math.floor(arrText.length / 2);
        const arrRemoved = arrText.splice(start);
        let counter = 0;

        arrRemoved.forEach((element) => {
            arrText.splice(counter, 0, element);
            counter += 2;
        });
    }

    return arrText.join('');
};

module.exports = { encrypt, decrypt };
