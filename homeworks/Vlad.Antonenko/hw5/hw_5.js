// METOD PUSH

let push = (arr, elem) => {
    'use strict';

    if (!Array.isArray(arr)){
        return false;
    }

    let pushElem = arr.length;

    arr[pushElem] = elem;

    return arr
}

// METOD POP

let pop = (arr) => {
    'use strict';

    if (!Array.isArray(arr)){
        return false;
    }
    
    let delElem = arr[arr.length - 1];

    arr.length = arr.length - 1;

    return delElem
}


// METOD SHIFT

let shift = (arr) => {
    'use strict';

    if (!Array.isArray(arr)){
        return false;
    }

    let delElem = arr[0];

    for (let i = 1; i < arr.length; i++){
        arr[i - 1] = arr[i];
    }
    arr.length = arr.length - 1

    return delElem
} 


//METOD UNSHIFT

let unShift = function(arr) {
    'use strict';

    if (!Array.isArray(arr)){
        return false;
    }

    let newArr = [];

    for (var i = 0; i < arguments.length; i++){
        newArr[i] = arguments[i+1] ;
    }

    newArr.length = newArr.length - 1;

    arr = newArr.concat(arr);

    return arr.length;
} 




