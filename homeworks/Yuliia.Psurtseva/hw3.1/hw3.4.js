/* написать функцию, которая выводит на консоль 
все высокосные года введенного значения (prompt), 
проверять что год явл годом через RegExp
*/
let inputYear = prompt("Input year", 1900);

let leapYear = (function(inputYear){
    let yearValidation = /^\d{1,4}$/g;
    let compareYear = inputYear.match(yearValidation);
    
    if (!compareYear) {
        return ("Not a year");
    } else if (inputYear <= 1900 || inputYear >= 2018) {
        return ("Input year beetween 1900 and 2018");
    } else {
        let year = "";
        i = +inputYear;
        while (i % 4 !== 0) {
            i += 1;
        }

        if (i % 4 === 0){
            do {
                year += i + " ";
                i += 4;
            } while (i <= 2018);  
        }
        return year;
    }
})(inputYear);

console.log("Leap years are " + leapYear);
