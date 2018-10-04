function advancedFilter(input) {
    var arr = [];
    for(i = 0;i<=input.length;i+=1){
        if(input[i]>0 && input[i] < 10){
            arr.push(input[i]);
        }
    }

    console.log(arr);
    return arr;
}
result = advancedFilter([1,19,8,-6,7]);
module.exports = advancedFilter;
