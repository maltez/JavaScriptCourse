/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
    
    var result ; 
    if (typeof (input)){
        if (input != number){
            return ;
        }
    }
    
    
    let result = string;
    
      if(isNaN(input)) {
          if (input >= 1){
          for(var p = 1; p<=input;p++ ){
            result += p + ',';
    
          } 
              
          }else if  (input <1) {
              for(var p = 1; p>=input;p--)
              result += p + ',';
          }
              
          
    
     
    
    }
    return;
    }
    
    module.exports = stringBuilder;
    

