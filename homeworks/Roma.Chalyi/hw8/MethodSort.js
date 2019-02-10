/**
 * implementation of method sort by method reduce
 * @param {array} array
 * @param {function} fn  
 * @returns {newArr}  //Returns sort array.
 */
 var arr = [55,3,1,557,33,5,6,78,9,23,46,58,4444,0];

 function cb (a, b){                            //function callBack
    if (a > b) return true;
    if (a < b) return false;
 };

 function sortViaReduce(array, fn) {
     if(Array.isArray(array) && typeof(fn) === 'function'){
        newArr = array;
        for( var j = 1; j < array.length; j++){
            newArr.reduce(function(acc, item, i){
                if(cb(acc, item)){
                    newArr[i - 1] = item;
                    if( i === array.length - 1){        //write the last item
                        newArr[i] = acc;
                    }
                    return acc;
                }
                else {
                    newArr[i - 1] = acc;
                    if( i === array.length - 1){                //write the last item
                        newArr[i] = item;
                    }
                    return item;
                }
         });
        }
        return newArr;
     }
     else if(Array.isArray(array)){
         return 'parameter "cb" must be an function';
     }
     else {
        return 'parameter "arr" must be an array';
     }

 };
 console.log(sortViaReduce(arr,cb));

