
function moveZeros  (array)  {
    for(var i = array.length - 1, j = i; i >= 0; i--){
        if(array[i] == 0){
            var k = i, newarr = array[i];
            while(k < j)
                array[k] = array[++k];
            array[j--] = newarr;
        }
    }
    return array;
}
console.log(moveZeros([ 6, 0, 0, 13, 0, 0, 19, 14]));
