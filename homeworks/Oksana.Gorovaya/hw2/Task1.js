let n = -8;
let string = '';
let result = task1_function(n);
console.log(result);
function task1_function(n) {
    if (typeof n !== 'number'){
        return
    }
    if (n < -1) {
        for (number = 1; number > n; number--) {
            string += number;
            if (number !== n + 1) {
                string = string + ','
            }
        }
    }

    for (number = 1; number < n; number++) {
        string += number;
        if (number !== n - 1) {
            string = string + ','
        }

    }
    return string;
}
