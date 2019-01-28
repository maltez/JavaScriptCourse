// the function removes the last element from the array


function deleteLastItem (arr) {
    if(Array.isArray(arr)) {

        arr.length += -1;
        return arr;

    }
    else {
        return 'the function should take an array'
    }
}
console.log(deleteLastItem([45 ,true , 33, '12', 44]));

