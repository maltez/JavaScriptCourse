let n = 7;
let result = task5_function(n);
console.log(result);
function task5_function(n) {
    if (isNaN(n)) {
        return 'Use numbers here';
    }
    if (n <= 0) {
        return 'Use positive numbers here';
    }
    let factorial = 1;
    for (let number = 1; number <= n; number++) {
       factorial = number * factorial;
    }
    return factorial;
}