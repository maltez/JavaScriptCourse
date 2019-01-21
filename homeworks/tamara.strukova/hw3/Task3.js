/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {
    if (typeof input !== 'string'){
        return 'Please, put a string';
    }

    let lowLetters = input.toLowerCase();
    let reversedLetters = lowLetters.split('').reverse().join('');

    // console.log(lowLetters);
    // console.log(reversedLetters);

    return lowLetters === reversedLetters;
}

console.log(isPolindrome('Faradenza'));

module.exports = isPolindrome;
