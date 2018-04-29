/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {

    let arr = [];
                
    let isPolindrom = (string) => string.split('').reverse().join('') == string; //проверка на полиндорм
                
    let checkArray = arr => arr.some(str => isPolindrom(str));
    
    //console.log(checkArray(arr));
}

module.exports = isPolindrome;