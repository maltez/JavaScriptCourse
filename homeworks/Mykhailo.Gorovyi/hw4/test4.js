let arr = [1, 2, 3, 4, 5, -11, 8];
let bool = true;
let result = fun(arr,bool);
console.log(result);

fun(arr,bool);
function fun(arr,bool) {
    if(bool === false) {
        return Math.min(...arr);
    }
    return Math.max(...arr);
}