function stringBuilder(input) {
    var Numbers = [];
    if (typeof(input) === 'number'){
        if(input > 0){
            for(i = 1;i<=input;i++){
                Numbers.push(i);
            }
        }else if(input < 0){
            for(i=1; i>=input;i--){
                Numbers.push(i);
            }
        }

        Numbers.join(',');
        var result = Numbers.toString();
        return result;

    }
}

console.log(stringBuilder(-10));

module.exports = stringBuilder;

