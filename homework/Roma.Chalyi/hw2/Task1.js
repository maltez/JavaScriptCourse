/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */

function stringBuilder(input) {
    if (typeof(input) === 'number'){
        var i = 1;
        var str = '';

        if(input >= i ){

            while(i <= input) {
                if(i==input){
                    str += i;          //deletes the comma in the last element
                    return str;
                }
            else{
            str += i + ", ";
            }
            i++;
            }
        }

        if(input == 0){
            str = 0;
            return str;
        }
    
        if(input <= i){
            while(i >= input){
                if (i == input){        //deletes the comma in the last element
                    str += i;
                    return str;
                }
                str += i + ", ";
                i = i - 1;
            };
        }
    }
    else {
     str ='please enter a numeric value';
    }
    return str;
};
console.log(stringBuilder(44));