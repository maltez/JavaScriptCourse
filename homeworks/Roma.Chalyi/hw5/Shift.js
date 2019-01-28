//the function removes the first element from the array


function removeFirstElement(array) {
    if(Array.isArray(array)){
        var count = 0;
        for(var i = 1; i < array.length; i++){
            array[count] = array[i];
            count ++;
        }
        array.length += -1;
        return array;
    }
    else {

    return 'the function should take an array'
    }
}

console.log(removeFirstElement([12, 60, true, 'tsk', 55]));