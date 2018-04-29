/**
 * @param {number} minute
 * @returns {number} Returns the quoter based on input.
 * 
 * Задание 2. Функция принимает параметр min. 
 * Параметр должен являться числом. В нем лежит 
 * число от 0 до 59. Функция должна возвращать в 
 * какую четверть часа попадает это число (в первую, 
 * вторую, третью или четвертую).
 */
// function hourQuoter (minute) {
//     return;
// }
// ____Start_____ Вариант -1 с if
function hourQuoter (minute) {
  if (typeof minute === "number") {
     if (minute >=0 && minute <=14){
       return ("first quarter");
     } else if (minute >=15 && minute <=29){
       return ("second quarter");
     } else if (minute >=30 && minute <=44){
       return ("third quarter");
     } else if (minute >=45 && minute <=60){
       return ("fourth quarter");
     }
   }
 else{
   return ("Not appropriate, wright another amount!");
 }
}
// console.log(hourQuoter (22));
// ______end______ 

// The second variant with switch:
// function hourQuoter (minute) {
//   switch (typeof minute === "number"){
//     case (minute >=0 && minute <=14):
//       return ("first quarter");
//     case (minute >=15 && minute <=29):
//       return ("second quarter");
//     case (minute >=30 && minute <=44):
//       return ("third quarter");
//     case (minute >=45 && minute <=60):
//       return ("fourth quarter");
//     default:
//       return ("Not appropriate, wright another amount!");
//   }
// }

// to check:
// console.log(hourQuoter(46));

module.exports = hourQuoter;
