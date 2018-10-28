let n = 6;
let result = abc(n);
console.log(result);
function abc(n) {
    if (isNaN(n)){
        return "not a num";
    }
    let k = 1;
    for (i = 1; i <= n; i++){
     k = i * k;
    }
    return k;

}