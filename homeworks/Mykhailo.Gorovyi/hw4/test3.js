let arr = [1, 3, 11, 5, 7, 8, 9, 14, 15, 16];
let arr2 = [ ];
let resoult = arr2;
fun(arr);
function fun(arr) {
    //let arr2 = [ ];
    for(i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            if(arr[i] % 3 === 0 || arr[i] % 5 === 0 || arr[i] % 7 === 0){
                arr2.push(arr[i]);
            }
        }
    }
    return arr2;
}console.log(resoult);
