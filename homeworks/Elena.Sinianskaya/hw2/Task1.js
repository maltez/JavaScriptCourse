/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
// task_1
// Функция принимает число 
// n(проверить что n является числом в противном
//  случае завершить работу функции). 
//  Функция возвращает строку чисел от 1 до 
//  n через разделитель ','. Если число меньше 1 
//  то выдается строка (например n = -2 строка должна 
//   быть '1,0,-1,-2').
//  
// the firnst variant, with 0:

// function stringBuilder(n) {
//   if (typeof n === "number"){
//     var i;
//     var strPositive = 0; //- if don't assign anything to the variable now, the return's line will be 'undefined'.
//     var strNegative = 0;
//     // returns string, because if  n>=0 from  0 to n (i<=n ).
//     if (n>=1){
//        for (i=1; i<=n; i++){
//          strPositive +="," + i ;
//        }
//        return strPositive; //return finishes a function
//     }
//    
//     else if (n<=1){
//               for (i=-1; i>=n; i--){//i=-1 
//          strNegative += ',' + i ;
//        }
//        return strNegative;
//     }
//   }
//     else{
//      return ('Unfortunately it\'s not a number! Please, wright a number.' );
//    }
// }
// the same with 1:
function stringBuilder(n) {
  if (typeof n === "number"){
    var i;
    var strPositive = ''; 
    var strNegative = '';
   
    if (n>=1){
       for (i=1; i<=n; i++){
         strPositive += i + ', ' ;
       }
       return strPositive.substring(0, strPositive.length - 2); //delete 2 latest symbols and space
    }
 
    else if (n<=1){
              for (i=1; i>=n; i--){
         strNegative +=  i + ', ' ;
       }
       return strNegative.substring(0, strNegative.length - 2);
    }
  }
    else{
     return ('Unfortunately it\'s not a number! Please, wright a number.' );
   }
}

// to check:
//  console.log(stringBuilder(1));
// ______finish tack_1_______

module.exports = stringBuilder;

