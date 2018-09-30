let first = 6;
let second = 4;
let result = task4_function (first, second);
console.log(result);
function task4_function (first, second) {
    if (isNaN(first || second)) {
        return 'Use numbers here';
    }
    if (first === 0) {
        return 'It is a zero. How are you going to divide it?';
    }
    if (second === 0) {
        return 'You cannot just divide by 0';
    }
    if (first % second === 0) {
        return true;
    }
    return false;
}