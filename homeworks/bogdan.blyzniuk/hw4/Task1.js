function commonDivisor(num1, num2)
{   
    if (num1 == 0 || num2 == 0) {
        console.log ('error');
    }
    var x = Math.abs(num1);
    var y = Math.abs(num2);
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
    return c;
}
console.log(commonDivisor(3024, 180));
