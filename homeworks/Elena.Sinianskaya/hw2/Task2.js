/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
// function hourQuoter (minute) {
//     return;
// }
// ____Start_____
function hourQuoter (minute) {
    if (typeof minute === "number") {
       if (minute >=0 && minute <=14){
         return ("first quarter")
       } else if (minute >=15 && minute <=29){
         return ("second quarter")
       } else if (minute >=30 && minute <=44){
         return ("third quarter")
       } else if (minute >=45 && minute <=60){
         return ("fourth quarter")
       }
     }
   else{
     return ("Not appropriate, wright another amount!")
   }
 }
 console.log(hourQuoter (22))
// ______end______ 

module.exports = hourQuoter;
