let number_array = [4,6,13,3,0];
let result = array_func (number_array);
console.log(result);

function array_func (number_array) {
    let chosen_numbers = [];
    for (let x = 0; x <= number_array.length -1; x++) {
        if (number_array[x] > 0 && number_array[x] < 10) {
            chosen_numbers.push(number_array[x]);
        }
    }
    return chosen_numbers;
}