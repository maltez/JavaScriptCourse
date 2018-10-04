function isPolindrome(input) {
    var string_reverse = input.split('').reverse().join('');
    return input === string_reverse;
}
module.exports = isPolindrome;