@ -0,0 +1,7 @@
/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 */
function hourQuoter (minute) {
 if (typeof minute !== "number"){
   return;
 }else if (minute >= 0 && minute <= 14) {
   return 1;
 }else if (minute >= 15 && minute <= 30) {
   return 2;
 }else if (minute >= 31 && minute <= 45) {
   return 3;
 }else if (minute >= 46 && minute <= 59) {
   return 4;
 }else{
   return false;
 }
}
module.exports = hourQuoter;
