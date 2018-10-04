function negativeFilter(input) {
    var arr = [];
    for(i = 0;i<=input.length;i+=1){
        if(input[i]>0){
            arr.push(input[i]);
        }
    }

    console.log(arr);
    return arr;
}

module.exports = negativeFilter;
