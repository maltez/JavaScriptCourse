// the function adds an element to the beginning of the array


function AddToTop( array, element) {

    if(Array.isArray(array)) {  
        var count = array.length;
        var a = count -1;
        for( i = a; i < array.length ; i--){

           array[count] = array[i];
           count --; 
            if(i === 0) {
                array[0] = element;
                return array;
            } 
        }
        return 'вышло из цыкла'

    }
    else {
        return 'the function should take an array';
    }
}

console.log(AddToTop([54, 93, 'tsk', 15], '11'));


