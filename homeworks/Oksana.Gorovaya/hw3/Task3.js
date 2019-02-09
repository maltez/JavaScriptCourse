let palindrome_str = 'razecar';
let result = palindrome (palindrome_str);
console.log(result);

function palindrome (palindrome_str) {
let splited_string = palindrome_str.split('');
console.log(splited_string);
let reversed_string = splited_string.reverse();
console.log(reversed_string);
let joint_string = reversed_string.join('');
console.log(joint_string);
    if (joint_string === palindrome_str) {
        return true;
    }
    return false;
}