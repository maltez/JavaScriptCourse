/**
 * @param {number} num
 * @returns {number} Returns factorial of num.
 */
function factorial(num) {

    if ( typeof num !== 'number'){
        return false;
    }

    if ( n === 0 ){
        return 1;
    }

    var composition = 1;

    if ( num > 0){
        for ( var i = 1; i < num; i++){
            composition *= i;
        }
        return composition;
    } else{
        return false;
    }
    
}

module.exports = factorial;