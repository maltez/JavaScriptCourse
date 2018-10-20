let some_array = [0,3,4,-5,6,7,8,9];
console.log(array_fnc(some_array));

function array_fnc(some_array) {
    let temp_array = [];
    for (i = 0; i < some_array.length; i++) {
        if (some_array[i] !== 0) {
            if (some_array[i] % 3 === 0 || some_array[i] % 5 === 0 || some_array[i] % 7 === 0) {
                temp_array.push(some_array[i]);
            }
        }
    }
    return temp_array;
}