let A = [16, 24];
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
}
