/**
 * implementation of method filter by method reduce
 * @param {array} array
 * @param {function} fn  
 * @returns {newArr}  //Returns filtered array.
 */


var arr = [22,'55',45,-567,2,3,'hello', '77'];

function cb(elem){                              //function callBack
    if(typeof(elem) === 'number'){
        return true;
    }
    else {
        return false;
    }
};

function filterViaReduce(array, fn){
    if(Array.isArray(array) && typeof(fn) === 'function'){
        return array.reduce(function(acc, item){
            if(fn(item)){
                acc.push(item);
            }
            return acc;
        },[]);
    }
    else if(typeof(fn) === 'function'){
        return 'parameter ' + 'arr' + ' must be an array'
    }
    else {
        return 'parameter ' + 'cb' + ' must be an function'
    }
}
console.log(filterViaReduce(arr,cb));
