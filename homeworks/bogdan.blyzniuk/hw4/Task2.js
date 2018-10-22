function lowestMultiple(num1, num2)
{   
    if (num1 == 0 || num2 == 0) {
        console.log ('error');
    }
    var a = Math.abs(num1);
    var b = Math.abs(num2);
    var x = a;
    var y = b;
       while (x && y){ 
        if (x > y)
        {
            x = x % y; 
        }
        else
        {
            y = y % x;
        }
        }
        c = x + y;
        z = (a*b)/c;
    return z;
}
console.log(lowestMultiple(15, 25));
