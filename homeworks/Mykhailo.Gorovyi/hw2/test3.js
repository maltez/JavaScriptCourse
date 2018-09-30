let time = 2;
timmer(time);
let result = timmer(time);
console.log(result);
function timmer(time) {
    if (isNaN(time)){
        return "not a num";
    }
    return time * 3600;
}