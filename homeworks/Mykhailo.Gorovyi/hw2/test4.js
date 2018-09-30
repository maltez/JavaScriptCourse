let first = 0;
let second = 5;
let result = del(first,second);
console.log(result);
del(first,second);
function del(first,second) {
    if(first % second === 0){
        return true;
    }
    return false;

}