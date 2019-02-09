let some_array = [2,4,3,6,6,7,-2];
let boolean_var = false;
console.log(check_number (some_array, boolean_var));

function check_number (some_array, boolean_var) {
    if (boolean_var === true) {
        return Math.max(...some_array);
    }
    return Math.min(...some_array);
}
