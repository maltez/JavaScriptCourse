/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */
function isPolindrome(input) {

    var inputToArray = input.split('').join('').toLowerCase();
    var reversArray = [];
    reversArray = inputToArray.reverse();
    var boolVariable = true;

    for (var i = 0; i < inputToArray.length; i += 1){
        if ( inputToArray[i] !== reversArray[i] ){
            boolVariable = false;
        } else {
            boolVariable = true;
        }
    }

    return boolVariable;
}

module.exports = isPolindrome;
