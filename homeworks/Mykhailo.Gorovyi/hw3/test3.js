var number = 12344321;
number = number + "";
numberreverse = number.split("").reverse().join('');
console.log ("The number if reversed is " +numberreverse);
if (number == numberreverse)
    console.log("Yes");
else
    console.log("No");
