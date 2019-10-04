/**
 * - Write a function toWeirdCase that accepts a string,
 * and returns the same string with all even indexed characters in each word upper cased, 
 * and all odd indexed characters in each word lower cased. 
 * The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
 * 
 * The passed in string will only consist of alphabetical characters and spaces(' '). 
 * Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
 * 
 */

/**
 * 
 * @param {string} input
 */
const toWeirdCase = function (input) {
    if (!input) {
        return;
    }

    /**
     * inp - one word string.
     * @param {string} inp
     */
    var LocaltoWeirdCase = function (inp) {
        var outstr = '';
        for (var i = 0; i < inp.length; i += 1) {
            if (!(i % 2)) {
                outstr += inp.charAt(i).toUpperCase();
            } else {
                outstr += inp.charAt(i).toLowerCase();
            }
        }
        return outstr;
    }

    var strArray = input.split(' ');
    var output = '';
    for (var i = 0; i < strArray.length; i += 1) {
        output += ' ';
        output += LocaltoWeirdCase(strArray[i]);
    }
    /*
     *remove first space - ' ';
     * */
    return output.slice(1);
}


var a = toWeirdCase("Create function that check and recognize (define the type) input text")
console.log(a);
