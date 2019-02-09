let first_number = 5;
let second_number = 4;
let result = find_multiple(first_number, second_number);
console.log(result);

function find_multiple(first_number, second_number) {
    let bigger_number = first_number > second_number ? first_number : second_number;
    if (first_number > 0 && second_number > 0) {
        for (i = bigger_number; i >= 1; i++) {
            if (i % first_number === 0 && i % second_number === 0) {
                return i;
            }
        }
    }else {
        return 'use positive numbers only!'
    }
}