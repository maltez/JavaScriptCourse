let some_array = [4,0,6,4,7,0,0,5];
console.log(move_zero(some_array));

function move_zero(some_array) {
    let noZero = some_array.filter(element => element !== 0);
    let zeros = some_array.filter(element => element === 0);
    return noZero.concat(zeros);
}
