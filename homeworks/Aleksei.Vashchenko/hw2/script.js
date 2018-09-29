// var n = -5;
// var arr = [];
//  if(n>=1, isNaN(n)) {
//     alert('This is not a number');
//  }
//  else if(n<=1){
//     for (i=1; i>=n; i-=1) {
//         arr.push(i);
//     }
//     alert(arr);
//  }
//  else{
//     for (i=1; i<=n; i+=1) {
//         arr.push(i);
//     }
// var n = -5;
// var arr = [];
//  if(n>=1, isNaN(n)) {
//     alert('This is not a number');
//  }
//  else if(n<=1){
//     for (i=1; i>=n; i-=1) {
//         arr.push(i);
//     }
//     alert(arr);
//  }
//  else{
//     for (i=1; i<=n; i+=1) {
//         arr.push(i);
//     }
//     alert(arr);
//  }
/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */
function stringBuilder(input) {
var arr = [];
 if(input>=1, isNaN(input)) {
    alert('This is not a number');
 }
 else if(input<=1){
    for (i=1; i>=input; i-=1) {
        arr.push(i);
    }
    alert(arr);
 }
 else{
    for (i=1; i<=input; i+=1) {
        arr.push(i);
    }
    alert(arr);
 }
    return;
};

module.exports = stringBuilder;