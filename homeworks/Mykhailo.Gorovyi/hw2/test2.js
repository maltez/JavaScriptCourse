let min = -1;
let result = test(min);
console.log(result);
function test(min) {
    if(isNaN(min)) {
        console.log("not a number");
    }
        if (min <= 15 && min >= 0) {
            return "1";
        }
        else if (min <= 30 && min >= 0){
            return "2"
        }
        else if (min <= 45 && min >= 0){
            return "3"
        }
        else if (min <= 59 && min >= 0){
            return "4"
        }
        else if (min < 0){
            return "error"
        }
        console.log(min);

}