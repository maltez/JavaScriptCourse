var array1 = [121, 144, 19, 161, 19, 144, 19, 11];
var array2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
comp(array1, array2);
function comp(array1, array2){
    var result = true;
    array2.forEach(function(x){
        if (!array1.includes(Math.sqrt(x))) {
            result = false;
        }console.log(result);
    });
    return result;
}
