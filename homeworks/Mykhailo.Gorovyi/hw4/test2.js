

let x = 16;
let y = 8;
nok(x.y);
let resoult = nok(x,y);
console.log(nok(x,y));
function nok(x,y) {
    return (x / nod(x, y) | 0) * y;
}
nod(n,m);
let n = 56;
let m = 48;
function nod(n, m) {
    if(m > 0) {
        var k = n%m;
        return nod(m, k);
    }
    else {
        return abs(n);
    }
}
/*let A = [16, 24, 32, 40, 48];
let resoult = NOK(A);
console.log(resoult);
NOK(A);
function NOK(A)
{
    var  n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
    { var b = Math.abs(A[i]), c = a;
        while (a && b){ a > b ? a %= b : b %= a; }
        a = Math.abs(c*A[i])/(a+b);
    }
    return a;
}*/