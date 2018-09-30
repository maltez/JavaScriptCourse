let n = -10;
test (n);
function test(n) {
    if(isNaN(n)){
        console.log("not a number");
        return
    }
    let m = "";
    if(n < 1){
    for (var i = 1; i > n; i--){
     m = m + i + ',';
    }
     console.log(m);
    }
    for (var i = 1; i < n; i++){
    m = m + i + ',';

    }
    console.log(m);
}


