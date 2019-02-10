/**
 * implementation of method map by method reduce
 * @param {array[number]} array
 * @param {function} fn  
 * @returns {newArr}  //Returns changed array.
 */

var arr = [45,17,33,55,28,0];

function cb(elem) {                 //function callBack
    return elem * 20;
}

function mapViaReduce(array, fn) {
    if(Array.isArray(array) && typeof(fn) === 'function'){
    return array.reduce(function(acc,item){
         acc.push(fn(item));                            
         return acc;
    }, []);
    }
    else if(Array.isArray(array)){
        return 'parameter ' + 'cb' + ' must be an function';
    } 
    else {
        return 'parameter ' + 'arr' + ' must be an array';
    }
};
console.log(mapViaReduce(arr, cb));
